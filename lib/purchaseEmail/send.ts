import "server-only";
import { appStoreUrl } from "@/lib/appStoreListing";
import { checkoutLang } from "@/lib/checkoutReminder/reminders";
import { SITE_URL } from "@/lib/i18n";
import { isResendConfigured, postalAddress, sendEmail } from "@/lib/resend";
import { createAdminClient, isServiceConfigured } from "@/lib/supabase/admin";
import { renderPurchaseEmail } from "./render";

/**
 * The way in, mailed to whoever just paid on the web. A buyer who pays inside Meta's in-app
 * browser lands on a done page in a webview they will close, and nothing else tells them where
 * the app is or which account their purchase is on.
 */

export const isPurchaseEmailConfigured = isServiceConfigured && isResendConfigured;

export type PurchaseEmailOutcome = "sent" | "no_email" | "failed";

/** Never throws: a lost email must not fail the webhook that granted the purchase. Keyed on the
 * transaction, so Paddle redelivering the event inside Resend's 24 hours sends nothing twice. */
export async function sendPurchaseEmail(userId: string, transactionId: string): Promise<PurchaseEmailOutcome> {
  try {
    const { data, error } = await createAdminClient().auth.admin.getUserById(userId);
    if (error) return "failed";
    const email = data.user.email;
    if (!email) return "no_email";

    const rendered = renderPurchaseEmail({
      lang: await checkoutLang(userId),
      email,
      provider: typeof data.user.app_metadata?.provider === "string" ? data.user.app_metadata.provider : null,
      appStoreUrl,
      // `proxy.ts` sends `/app` to `app.<host>/`, the same link the done page carries.
      webAppUrl: `${SITE_URL}/app`,
      postalAddress,
    });
    const sent = await sendEmail({ to: email, ...rendered }, `purchase-email/${transactionId}`);
    return sent ? "sent" : "failed";
  } catch (cause) {
    console.error("purchase email failed", cause);
    return "failed";
  }
}

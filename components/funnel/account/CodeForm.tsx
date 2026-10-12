import { fillNodes, fill, useLocale } from "../locale";
import { CODE_MAX, CODE_MIN, type EmailAuth } from "./useEmailAuth";
import { FADE, FIELD } from "./styles";

/** The second screen: what was mailed to the address. */
export function CodeForm({ auth }: { auth: EmailAuth }) {
  const { busy, code, cooldown, email, error } = auth;
  const words = useLocale().copy.account;

  return (
    <div className="mt-5 flex flex-col gap-3">
      <p className="text-[15.5px] leading-[1.5] text-muted">
        {fillNodes(words.codeSent, { email: <span className="font-medium">{email}</span> })}
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          void auth.verify(code);
        }}
        className="flex flex-col gap-2"
      >
        <input
          // `one-time-code` puts the code on the keyboard bar instead of making them switch apps.
          autoComplete="one-time-code"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={CODE_MAX}
          autoFocus
          value={code}
          // `onInput`, not `onChange`: Preact wires `onChange` to the native `change` event,
          // which fires on blur — and this field submits itself on its last digit.
          onInput={(event) => auth.onCodeInput(event.currentTarget.value)}
          className={`${FIELD} text-center text-[22px] tracking-[0.35em]`}
        />
        <button
          type="submit"
          disabled={busy || code.length < CODE_MIN}
          className="btn h-[46px] text-[17.5px] font-semibold disabled:opacity-40"
        >
          {busy ? words.busy : words.continue}
        </button>
      </form>

      {error && <p className="text-[15.5px] leading-snug opacity-80">{error}</p>}

      <div className="flex items-center justify-between text-[15.5px] text-muted">
        <button
          onClick={() => void auth.resend()}
          disabled={busy || cooldown > 0}
          className={`${FADE} disabled:opacity-40`}
        >
          {cooldown > 0 ? fill(words.resendIn, { seconds: cooldown }) : words.resend}
        </button>
        <button onClick={auth.changeEmail} className={FADE}>
          {words.changeEmail}
        </button>
      </div>
    </div>
  );
}

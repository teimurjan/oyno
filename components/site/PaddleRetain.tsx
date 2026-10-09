"use client";

import { useEffect } from "react";
import { onIdle } from "@/lib/idle";
import { paddleClientToken } from "@/lib/paddlePrices";

/**
 * Loads Paddle.js on the home page so Retain's payment-recovery links have somewhere to open
 * their one-click card update. Imported on idle, so the hero never waits on Paddle.
 */
export function PaddleRetain() {
  useEffect(() => {
    if (!paddleClientToken) return;
    return onIdle(() => {
      void import("@/lib/paddleClient").then(({ paddleBrowserClient }) => paddleBrowserClient());
    });
  }, []);

  return null;
}

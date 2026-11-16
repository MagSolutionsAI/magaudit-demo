import { createCheckout } from "magaudit-demo-nonexistent-sdk";

// Runs in the browser: the checkout button calls this directly.
export function startCheckout(cart) {
  return createCheckout({
    apiKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    items: cart,
  });
}

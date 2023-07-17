"use client";

import { CartProvider } from "./Cart";

export default function Providers(props: { children: React.ReactNode }) {
  return <CartProvider>{props.children}</CartProvider>;
}

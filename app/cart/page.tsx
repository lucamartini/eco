"use client";

import { useRecoilState } from "recoil";
import { cartState } from "../providers/cartAtom";
import CartList from "./CartList";

export default function Cart() {
  const [cart, setCart] = useRecoilState(cartState);

  return <CartList cart={cart} />;
}

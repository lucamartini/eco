"use client";

import { useCart } from "../providers/Cart";
import Button from "@mui/material/Button";

export default function CartButton() {
  const cart = useCart();

  return <Button color="inherit">{`Cart (${cart.length})`}</Button>;
}

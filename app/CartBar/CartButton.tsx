"use client";

import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { cartLengthState } from "../providers/cartAtom";

export default function CartButton() {
  const cartLength = useRecoilValue(cartLengthState);

  return <Button color="inherit">{`cart (${cartLength})`}</Button>;
}

"use client";

import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { cartLengthState } from "../providers/cartAtom";
import Link from "next/link";

export default function CartButton() {
  const cartLength = useRecoilValue(cartLengthState);

  return (
    <Link href={"/cart"}>
      {" "}
      <Button color="inherit">{`cart (${cartLength})`}</Button>
    </Link>
  );
}

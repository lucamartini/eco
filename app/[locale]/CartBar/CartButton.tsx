"use client";

import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { cartLengthState } from "../providers/cartAtom";
import { useTranslations } from "next-intl";

export default function CartButton() {
  const cartLength = useRecoilValue(cartLengthState);
  const t = useTranslations("CartBar");

  return <Button color="inherit">{`${t("cart")} (${cartLength})`}</Button>;
}

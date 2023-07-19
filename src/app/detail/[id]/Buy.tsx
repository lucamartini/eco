"use client";

import Button from "@mui/material/Button";
import { useSetRecoilState } from "recoil";
import { cartState } from "@/app/providers/cartAtom";

export default function Buy(props: { id: string }) {
  const { id } = props;
  const setCart = useSetRecoilState(cartState);

  return (
    <Button
      onClick={() => {
        setCart((oldCart) => [...oldCart, { id }]);
      }}
    >
      Add to cart
    </Button>
  );
}

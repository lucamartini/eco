"use client";

import Button from "@mui/material/Button";
import { useRecoilState } from "recoil";
import { cartState } from "@/app/providers/cartAtom";

export default function Buy(props: { id: string }) {
  const { id } = props;
  const [cart, setCart] = useRecoilState(cartState);

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

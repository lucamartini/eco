"use client";

import Button from "@mui/material/Button";
import { useCartDispatch } from "../../providers/Cart";

export default function Buy(props: { id: string }) {
  const { id } = props;
  const cartDispatch = useCartDispatch();

  return (
    <Button
      onClick={() => {
        console.log(id);
        cartDispatch({
          type: "add",
          id: id,
        });
      }}
    >
      Add to cart
    </Button>
  );
}

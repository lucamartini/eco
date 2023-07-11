"use client";

import Button from "@mui/material/Button";

export default function Inspect(params: { id: number }) {
  const { id } = params;
  return (
    <Button size="small" onClick={() => console.log(id)}>
      Learn More
    </Button>
  );
}

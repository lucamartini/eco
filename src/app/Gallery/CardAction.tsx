"use client";

import CardActionArea from "@mui/material/CardActionArea";
import { useRouter } from "next/navigation";

export default function CardAction(props: {
  id: number;
  children: React.ReactNode;
}) {
  const { id, children } = props;
  const router = useRouter();

  return (
    <CardActionArea onClick={() => router.push("/detail/" + id)}>
      {children}
    </CardActionArea>
  );
}

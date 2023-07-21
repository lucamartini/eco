"use client";

import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import { useRecoilValue } from "recoil";
import { tokenState } from "../providers/tokenAtom";

export default function AccountButton() {
  const signedIn = useRecoilValue(tokenState);

  if (signedIn) {
    return <PersonIcon fontSize="large" />;
  } else {
    return <Link href={"/auth/login"}>{"login"}</Link>;
  }
}

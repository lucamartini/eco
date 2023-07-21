"use client";

import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import { useRecoilValue } from "recoil";
import { authenticationState } from "../providers/authenticationAtom";

export default function AccountButton() {
  const signedIn = useRecoilValue(authenticationState);

  if (signedIn) {
    return (
      <Link href={"/auth/user"}>
        {" "}
        <PersonIcon fontSize="large" />{" "}
      </Link>
    );
  } else {
    return <Link href={"/auth/login"}>{"login"}</Link>;
  }
}

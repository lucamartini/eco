"use client";

import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import { useRecoilValue } from "recoil";
import { authenticationState } from "../providers/authenticationAtom";
import { useEffect, useState } from "react";

export default function AccountButton() {
  const signedIn = useRecoilValue(authenticationState);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(Boolean(signedIn));
  }, [signedIn]);

  if (loggedIn) {
    return (
      <Link href={"/auth/user"}>
        <PersonIcon fontSize="large" />{" "}
      </Link>
    );
  } else {
    return <Link href={"/auth/login"}>{"login"}</Link>;
  }
}

"use client";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { authenticationState } from "../../providers/authenticationAtom";
import UserDetail from "./userDetails";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useLayoutEffect } from "react";

export default function User() {
  const authentication = useRecoilValue(authenticationState);
  const resetAuthentication = useResetRecoilState(authenticationState);
  const router = useRouter();

  useLayoutEffect(() => {
    if (!authentication) {
      router.push("/auth/login");
    }
  });

  if (authentication) {
    return (
      <>
        <Button
          onClick={() => {
            resetAuthentication();
          }}
        >
          {"log out"}
        </Button>
        <UserDetail authentication={authentication} />
      </>
    );
  } else {
    return null;
  }
}

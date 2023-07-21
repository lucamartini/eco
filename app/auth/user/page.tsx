"use client";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { authenticationState } from "../../providers/authenticationAtom";
import UserDetail from "./userDetails";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function User() {
  const authentication = useRecoilValue(authenticationState);
  const resetAuthentication = useResetRecoilState(authenticationState);
  const router = useRouter();

  if (authentication) {
    return (
      <>
        <Button
          onClick={() => {
            resetAuthentication();
            router.push("/auth/login");
          }}
        >
          {"log out"}
        </Button>
        <UserDetail authentication={authentication} />
      </>
    );
  } else {
    router.push("/auth/login");
  }
}

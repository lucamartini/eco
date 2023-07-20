"use client";

import { RecoilRoot } from "recoil";

export default function Providers(props: { children: React.ReactNode }) {
  return <RecoilRoot>{props.children}</RecoilRoot>;
}

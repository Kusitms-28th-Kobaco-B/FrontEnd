"use client";

import { RecoilRoot, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isLoggedInState = atom({
  key: "isLoggedIn",
  default: false,
  effects: [persistAtom],
});

export const createCopyState = atom({
  key: "createCopy",
  default: false,
  effects: [persistAtom],
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

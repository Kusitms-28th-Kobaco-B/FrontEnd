import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const peopleTrendState = atom({
  key: "peopleTrend",
  default: [],
  effects: [persistAtom],
});

export const itemTrendState = atom({
  key: "itemTrend",
  default: [],
  effects: [persistAtom],
});

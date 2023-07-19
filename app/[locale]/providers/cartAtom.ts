import { atom, selector } from "recoil";

export interface Item {
  id: string;
}

export const cartState = atom<Item[]>({
  key: "cart",
  default: [],
});

export const cartLengthState = selector({
  key: "cartLength",
  get: ({ get }) => get(cartState).length,
});

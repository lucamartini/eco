import { atom } from "recoil";

const localStorageEffect =
  (key: string) =>
  (args: { setSelf: (arg0: string) => void; onSet: (arg0: any) => void }) => {
    const { setSelf, onSet } = args;
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(savedValue);
    }

    onSet((newValue: string, _: string, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, newValue);
    });
  };

export const tokenState = atom({
  key: "token",
  default: null,
  effects: [localStorageEffect("token")],
});

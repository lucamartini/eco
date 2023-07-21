import { atom } from "recoil";

const localStorageEffect =
  (key: string) =>
  (args: {
    setSelf: (arg0: { token: string; id: string }) => void;
    onSet: (arg0: any) => void;
  }) => {
    const { setSelf, onSet } = args;
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet(
      (
        newValue: { token: string; id: string },
        _: string,
        isReset: boolean
      ) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      }
    );
  };

export const authenticationState = atom({
  key: "authentication",
  default: null,
  effects: [localStorageEffect("authentication")],
});

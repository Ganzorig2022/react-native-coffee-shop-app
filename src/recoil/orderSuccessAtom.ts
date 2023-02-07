import { atom } from 'recoil';

export const orderSuccessState = atom<boolean>({
  key: 'orderSuccessState', // unique ID
  default: false, // default value (aka initial value)
});

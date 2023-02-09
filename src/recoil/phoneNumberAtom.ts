import { atom } from 'recoil';

export const phoneNumberState = atom<string>({
  key: 'phoneNumberState', // unique ID
  default: '', // default value (aka initial value)
});

import { atom } from 'recoil';

export const otpState = atom<string>({
  key: 'otpState', // unique ID
  default: '', // default value (aka initial value)
});

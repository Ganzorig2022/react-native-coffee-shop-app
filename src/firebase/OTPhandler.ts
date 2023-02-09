import auth from '@react-native-firebase/auth';
import { useState } from 'react';

// const [confirm, setConfirm] = useState();

//  Handle the button press
export async function signInWithPhoneNumber(phoneNumber: string) {
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation as any);
  return confirmation;
}

export async function confirmCode(code: string) {
  try {
    // await confirm?.confirm(code);
  } catch (error) {
    console.log('Invalid code.');
  }
}

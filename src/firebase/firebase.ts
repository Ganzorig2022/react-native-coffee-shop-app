// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZjhwGEZttudEmQGfXYfboNLKkmISpgUg',
  authDomain: 'react-native-coffee-shop.firebaseapp.com',
  projectId: 'react-native-coffee-shop',
  storageBucket: 'react-native-coffee-shop.appspot.com',
  messagingSenderId: '960003590514',
  appId: '1:960003590514:web:dae168c6d2a742a53075eb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

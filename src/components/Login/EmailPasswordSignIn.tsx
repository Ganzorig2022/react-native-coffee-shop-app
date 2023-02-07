import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useState, Dispatch, SetStateAction, useRef } from 'react';
import { Input } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const EmailPasswordSignIn = ({ openModal, setOpenModal }: Props) => {
  const { setIsLoggedIn } = useAuthContext();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const submitHandler = async () => {
    const { email, password } = inputs;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('You are signed in');
      setIsLoggedIn(true);
    } catch (error: any) {
      console.log(error.message);
      Alert.alert(error.message);
    }

    // METHOD 2 - React-native-firebase library (not supported for EXPO GO app.)
    // auth()
    //   .createUserWithEmailAndPassword(inputs.email, inputs.password)
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //     setIsLoggedIn(true);
    //   })
    //   .catch((error) => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });

    setOpenModal(false);
  };

  return (
    <View className='mt-10'>
      <Modal
        animationType='fade'
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <View className='flex-1 justify-center items-center mt-6 bg-black/60'>
          <View
            style={styles.modalView}
            className='w-[300px] m-5 bg-white rounded-xl items-center p-6'
          >
            <Text className='text-center mb-4 uppercase font-semibold'>
              Log in to your account
            </Text>
            <Input
              placeholder='Enter your email'
              //   inputContainerStyle={{ backgroundColor: 'red' }}
              inputStyle={{ fontSize: 14 }}
              leftIcon={<AntDesign name='user' size={20} color='black' />}
              onChangeText={(text) =>
                setInputs((prev) => ({ ...prev, email: text }))
              }
            />
            <Input
              containerStyle={{ marginTop: -20 }}
              placeholder='Enter your password'
              //   inputContainerStyle={{ backgroundColor: 'red' }}
              inputStyle={{ fontSize: 14 }}
              leftIcon={<Ionicons name='key-outline' size={24} color='black' />}
              secureTextEntry={true}
              onChangeText={(text) =>
                setInputs((prev) => ({ ...prev, password: text }))
              }
            />
            <Pressable
              style={styles.button}
              onPress={submitHandler}
              className='bg-customOrange'
            >
              <Text className='text-bold text-white text-center'>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EmailPasswordSignIn;

const styles = StyleSheet.create({
  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
});

// import * as React from "react";
// import { Input } from "@rneui/base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuthContext } from '../../context/authProvider';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

// export default () => {
//   return (
//     <Input
//       containerStyle={{}}
//       disabledInputStyle={{ background: "#ddd" }}
//       inputContainerStyle={{}}
//       errorMessage="Oops! that's not correct."
//       errorStyle={{}}
//       errorProps={{}}
//       inputStyle={{}}
//       label="User Form"
//       labelStyle={{}}
//       labelProps={{}}
//       leftIcon={<Icon name="account-outline" size={20} />}
//       leftIconContainerStyle={{}}
//       rightIcon={<Icon name="close" size={20} />}
//       rightIconContainerStyle={{}}
//       placeholder="Enter Name"
//     />
//   );
// }

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useAuthContext } from '../../context/authProvider';

GoogleSignin.configure({
  webClientId:
    '960003590514-me9o75dpljik5rqe449176ebi0bi40eh.apps.googleusercontent.com',
});

const OAuthButtons = () => {
  const { setIsLoggedIn } = useAuthContext();

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const signInWithGoogle = async () => {
    onGoogleButtonPress().then(() => {
      console.log('You are signed in');
      setIsLoggedIn(true);
    });
  };

  return (
    <View className='flex-col items-center justify-center'>
      <TouchableOpacity
        onPress={() => signInWithGoogle()}
        className='flex-row items-center justify-center p-5'
      >
        <Image
          source={require('../../../assets/googlelogo.png')}
          className='w-6 h-6'
          resizeMode='cover'
        />
        <Text className='ml-4 font-semibold text-lg'>Continue with Google</Text>
      </TouchableOpacity>
      {/* {error && <Text className='text-red-500'> {error.message}</Text>} */}
    </View>
  );
};

export default OAuthButtons;

const styles = StyleSheet.create({});

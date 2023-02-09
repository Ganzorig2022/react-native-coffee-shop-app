import {
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { GlobalStyles } from '../constants/GlobalStyles';
import BackButton from '../components/ui/BackButton';
import OAuthButtons from '../components/Login/OAuthButtons';
import EmailPasswordSignIn from '../components/Login/EmailPasswordSignIn';
import DividerText from '../components/Login/DividerText';
import PhoneNumber from '../components/Login/PhoneNumber';

const SignInScreen = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <KeyboardAvoidingView
      className=''
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -40 : 0}
    >
      <SafeAreaView className='flex-col items-center justify-center my-20 mx-5'>
        {/* Go back BUTTON */}
        <BackButton title={'Sign In'} />

        <View className='flex-col items-center h-full w-full'>
          {/* ====== 1)  OTP Sign In ====== */}
          <PhoneNumber />
          <DividerText text={'Or sign in with your email'} />

          {/* ========= 2) EMAIL and PASSWORD SIGN-IN ======== */}
          {/*  SUBMIT BUTTON  */}
          <View className='mt-10'>
            <Button
              onPress={() => setOpenModal(true)}
              title='Email and Password'
              buttonStyle={{
                backgroundColor: GlobalStyles.colors.orange,
                borderRadius: 5,
                width: '100%',
              }}
              titleStyle={{ color: 'white' }}
              // loading={isLoading}
              // loadingProps={{ animating: true }}
            />
          </View>
          <EmailPasswordSignIn
            openModal={openModal}
            setOpenModal={setOpenModal}
          />

          {/* ========= 3) GOOGLE LOGIN ======= */}
          {/* <DividerText text={'Or sign In with gmail'} /> */}
          <OAuthButtons />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

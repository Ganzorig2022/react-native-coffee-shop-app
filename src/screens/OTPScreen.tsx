import { Text, TextInput, View, Image } from 'react-native';
import React, { useState } from 'react';
import Layout from '../components/ui/Layout';
import BackButton from '../components/ui/BackButton';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/GlobalStyles';
import { Button } from '@rneui/themed';
import { useAuthContext } from '../context/authProvider';

// export type NavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'SignIn'
// >;

const OTPScreen = () => {
  // const navigation = useNavigation<NavigationProp>();
  const { setIsLoggedIn } = useAuthContext();
  const firstInput = React.createRef<TextInput>();
  const secondInput = React.createRef<TextInput>();
  const thirdInput = React.createRef<TextInput>();
  const fourthInput = React.createRef<TextInput>();
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = () => {
    firstInput.current?.clear();
    secondInput.current?.clear();
    thirdInput.current?.clear();
    fourthInput.current?.clear();
    // setIsLoading(true);
    setIsLoggedIn(true);
  };

  return (
    <Layout>
      <BackButton title='OTP verification' />
      <Image
        source={require('../../assets/OTP_logo.png')}
        className='w-14 h-14 mt-20'
      />
      <Text className='mt-10 font-bold text-3xl w-[250px] text-center'>
        Enter the code we sent you
      </Text>
      <View className='flex-row items-center justify-between'>
        <Text className='text-gray-400 text-center p-2'>
          We sent it to the number
        </Text>
        <Text className='text-center p-2 font-semibold'>{'+976 99022052'}</Text>
      </View>

      <View className='flex-row items-center space-x-5'>
        <View className='mt-10 rounded border border-gray-400'>
          <TextInput
            className='text-3xl text-center px-3 py-4'
            maxLength={1}
            keyboardType='number-pad'
            ref={firstInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 1: text });
              text && secondInput.current?.focus();
            }}
          />
        </View>
        <View className='mt-10 rounded border border-gray-400'>
          <TextInput
            className='text-3xl text-center px-3 py-4'
            maxLength={1}
            keyboardType='number-pad'
            ref={secondInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 2: text });
              text && thirdInput.current?.focus();
            }}
          />
        </View>
        <View className='mt-10 rounded border border-gray-400'>
          <TextInput
            className='text-3xl text-center px-3 py-4'
            maxLength={1}
            keyboardType='number-pad'
            ref={thirdInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 3: text });
              text && fourthInput.current?.focus();
            }}
          />
        </View>
        <View className='mt-10 rounded border border-gray-400'>
          <TextInput
            className='text-3xl text-center px-3 py-4'
            maxLength={1}
            keyboardType='number-pad'
            ref={fourthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 4: text });
            }}
          />
        </View>
      </View>
      <View className='mt-10'>
        <Button
          onPress={submitHandler}
          title='Verify'
          buttonStyle={{
            backgroundColor: GlobalStyles.colors.orange,
            borderRadius: 5,
            width: '100%',
          }}
          titleStyle={{ color: 'white' }}
          loading={isLoading}
          loadingProps={{ animating: true }}
        />
      </View>
    </Layout>
  );
};

export default OTPScreen;

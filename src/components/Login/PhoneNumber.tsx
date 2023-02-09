import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import auth from '@react-native-firebase/auth';
import { useRecoilState } from 'recoil';
import { phoneNumberState } from '../../recoil/phoneNumberAtom';
import { signInWithPhoneNumber } from '../../firebase/OTPhandler';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

const PhoneNumber = () => {
  // const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);

  // go to "../screens/OTPScreen.tsx" page
  const submitHandler = async () => {
    // 1) Check if phone number is complete.
    if (phoneNumber.length === 8) {
      // 2) If it's okay, then go to "../screens/OTPScreen.tsx"
      // const result = await signInWithPhoneNumber(`+976${phoneNumber}`);
      navigation.navigate('OTP');
      setPhoneNumber('');
    } else {
      Alert.alert('Please enter 8 digit number to request a code');
    }
  };

  // console.log(phoneNumber);

  return (
    <View className='flex-col items-center'>
      <Image
        source={require('../../../assets/Frame.png')}
        className='w-14 h-14 mt-10'
      />
      <Text className='text-3xl font-bold w-60 text-center'>
        Enter your mobile number
      </Text>
      <Text className='text-gray-400 text-center p-2'>
        We will send the confirmation code
      </Text>
      <View className='flex-row items-center justify-center space-x-2 mt-5'>
        <Text className='text-black/60 text-3xl'>+976</Text>
        <TextInput
          editable
          multiline
          maxLength={8}
          numberOfLines={1}
          keyboardType='numeric'
          placeholder='phone'
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          className='p-2 text-3xl'
        />
      </View>
      {/* ========== SUBMIT BUTTON ===== */}
      <View className='mt-10'>
        <Button
          onPress={submitHandler}
          title='Request a code'
          buttonStyle={{
            backgroundColor: GlobalStyles.colors.orange,
            borderRadius: 5,
            width: '100%',
          }}
          titleStyle={{ color: 'white' }}
          // loading={isLoading}
          //   loadingProps={{ animating: true }}
        />
      </View>
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({});

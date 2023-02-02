import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/GlobalStyles';
import BackButton from '../components/ui/BackButton';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // go to "../screens/OTPScreen.tsx" page
  const submitHandler = () => {
    // 1) Send phone number to FIREBASE
    // 2) If it's okay, then go to "../screens/OTPScreen.tsx"
    // setIsLoading(true);
    navigation.navigate('OTP');
  };

  return (
    <KeyboardAvoidingView
      className=''
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -40 : 0}
    >
      <SafeAreaView className='flex-col items-center justify-center my-20 mx-5'>
        {/* Go back BUTTON */}
        <BackButton title={'Sign In'} />
        <View className='flex flex-col items-center justify-between h-full w-full'>
          <View className='flex-col items-center'>
            <Image
              source={require('../../assets/Frame.png')}
              className='w-14 h-14 mt-20'
            />
            <Text className='text-3xl font-bold w-60 text-center'>
              Enter your mobile number
            </Text>
            <Text className='text-gray-400 text-center p-2'>
              We will send confirmation code
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
          </View>
          <View>
            <Button
              onPress={submitHandler}
              title='Enter'
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
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useState, useRef } from 'react';
// import { useAuth } from '../hooks/useAuth';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../hooks/useAuth';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/GlobalStyles';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <KeyboardAvoidingView
      className=''
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -40 : 0}
    >
      <SafeAreaView className='flex-col items-center justify-center my-20 mx-5'>
        <TouchableOpacity
          className='w-full'
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back' size={24} color='black' />
        </TouchableOpacity>
        <View className='flex flex-col items-center justify-between h-full w-full'>
          <View className='flex-col items-center'>
            <Image
              source={require('../../assets/Frame.png')}
              className='w-10 h-10 mt-20'
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
          <Button
            onPress={() => setIsLoggedIn(true)}
            title='Enter'
            buttonStyle={{
              backgroundColor: GlobalStyles.colors.orange,
              borderRadius: 5,
              width: '100%',
            }}
            titleStyle={{ color: 'white' }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});

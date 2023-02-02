import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import Layout from '../components/ui/Layout';
import BackButton from '../components/ui/BackButton';
import { Overlay, Button, Icon } from '@rneui/themed';
import { GlobalStyles } from '../constants/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BottomTabs'
>;
const PaymentScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const submitHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <Layout>
      <BackButton title='Payment' />
      <View className='flex-col justify-center items-start mt-10 '>
        <View className=''>
          <Text className='font-bold text-lg'>QR code</Text>
        </View>
        <View className='items-center justify-center pt-10'>
          <Image
            source={require('../../assets/QR.png')}
            className='w-40 h-40'
            resizeMode='cover'
          />
          <View className='mt-10'>
            <Button
              onPress={toggleOverlay}
              title='Verify'
              buttonStyle={{
                backgroundColor: 'transparent',
                borderRadius: 5,
                width: '100%',
                borderColor: GlobalStyles.colors.orange,
                borderWidth: 2,
              }}
              titleStyle={{ color: GlobalStyles.colors.orange }}
              // loading={isLoading}
              // loadingProps={{ animating: true }}
            />
          </View>
        </View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={{ backgroundColor: 'white', borderRadius: 20 }}
        >
          <View className='flex-col items-center justify-center space-y-5 rounded-xl p-2'>
            <Text className='mt-2 text-2xl font-bold'>Баяр хүргэе!</Text>
            <Text className='mb-3 text-center'>Таны төлбөр баталгаажлаа.</Text>
            <View>
              <Button
                icon={
                  <Icon
                    name='check'
                    type='font-awesome-5'
                    color={GlobalStyles.colors.orange}
                    size={50}
                    // iconStyle={{ marginRight: 10 }}
                  />
                }
                buttonStyle={{
                  backgroundColor: 'white',
                  borderColor: GlobalStyles.colors.orange,
                  borderRadius: 50,
                  borderWidth: 2,
                  width: 100,
                  height: 100,
                }}
                title=''
                onPress={submitHandler}
              />
            </View>
          </View>
        </Overlay>
      </View>
    </Layout>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});

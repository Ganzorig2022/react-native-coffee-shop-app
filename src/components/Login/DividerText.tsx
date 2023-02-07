import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from '@rneui/themed';
import { GlobalStyles } from '../../constants/GlobalStyles';

type Props = {
  text: string;
};

const DividerText = ({ text }: Props) => {
  return (
    <View className='mt-10'>
      <View className='flex-row items-center justify-between'>
        <View className='w-[60px]'>
          <Divider width={1} color={GlobalStyles.colors.gray500} />
        </View>
        <Text className='mx-2'>{text}</Text>
        <View className='w-[60px]'>
          <Divider width={1} color={GlobalStyles.colors.gray500} />
        </View>
      </View>
    </View>
  );
};

export default DividerText;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { ReactNode } from 'react';
import BackButton from './BackButton';

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <SafeAreaView className='flex-col items-center justify-center my-20'>
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({});

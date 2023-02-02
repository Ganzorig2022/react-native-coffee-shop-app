import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Layout from '../components/ui/Layout';
import BackButton from '../components/ui/BackButton';

const PaymentScreen = () => {
  return (
    <Layout>
      <BackButton title='Payment' />
      <Text>PaymentScreen</Text>
    </Layout>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});

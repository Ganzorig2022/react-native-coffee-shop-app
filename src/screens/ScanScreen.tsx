import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Layout from '../components/ui/Layout';
import BackButton from '../components/ui/BackButton';

const ScanScreen = () => {
  return (
    <Layout>
      <BackButton title={'Scan'} />
      <Text>ScanScreen</Text>
    </Layout>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});

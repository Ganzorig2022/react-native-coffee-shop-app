import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../utils/fetcher';
import ProductList from './ProductList';

const FavouriteCard = () => {
  //   const [products, setProducts] = useState();
  const {
    isError,
    isSuccess,
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  //   console.log(data);

  //   if (error) return <Text>{error} happened...</Text>;

  return (
    <View className='flex-col justify-center mt-5 p-5'>
      <Text className='text-xl'>Your favourite</Text>
      <ProductList products={products} />
    </View>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({});

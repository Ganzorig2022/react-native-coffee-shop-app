import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';

type Props = {
  products: ProductType[];
};

const ProductList = ({ products }: Props) => {
  return (
    <FlatList
      data={products}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ProductItem {...item} />}
    />
  );
};

export default ProductList;

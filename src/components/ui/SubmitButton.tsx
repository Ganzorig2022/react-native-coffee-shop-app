import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/cartSlice';

type Props = {
  bgColor: string;
  textColor: string;
  title: string;
};
const SubmitButton = ({ bgColor, textColor, title }: Props) => {
  const dispatch = useTypedDispatch(); //redux

  const product = {
    id: '1',
    title: 'Coffe',
    amount: 2,
    price: 12.99,
    description: 'Very tasty black coffee',
  };

  const addItemToBasket = () => {
    dispatch(addToCart(product)); //redux
  };

  return (
    <View className='mt-5'>
      <Button
        onPress={() => addItemToBasket()}
        title={title}
        buttonStyle={{
          backgroundColor: bgColor,
          borderRadius: 3,
        }}
        titleStyle={{ color: textColor }}
      />
    </View>
  );
};

export default SubmitButton;

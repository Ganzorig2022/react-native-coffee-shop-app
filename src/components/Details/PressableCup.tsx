import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { GlobalStyles } from '../../constants/GlobalStyles';

type Props = {
  id: string;
  image: any;
  name: string;
};

const PressableCup = ({ id, image, name }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleSelect = () => {
    // 👇️ set to true
    setIsClicked((prev) => !prev);
  };

  return (
    <Pressable
      onPress={toggleSelect}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{
        color: GlobalStyles.colors.orange,
        borderless: true,
        radius: 40,
      }}
      className={`rounded-full ml-5 ${
        isClicked && 'bg-orange-200 border border-orange-400'
      }`}
    >
      <Image
        source={image}
        className='h-10 w-10'
        style={{ resizeMode: 'contain' }}
      />
      <Text className='text-gray-300'>{name}</Text>
    </Pressable>
  );
};

export default PressableCup;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    // backgroundColor: GlobalStyles.colors.orange,
    borderRadius: 20,
  },
});

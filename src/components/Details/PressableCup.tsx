import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { GlobalStyles } from '../../constants/GlobalStyles';

type Props = {
  id: string;
  image: any;
  name: string;
  size: string;
  detailsHandler: (name: string, value: string) => void;
};

const PressableCup = ({ id, image, name, size, detailsHandler }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleSelect = () => {
    // 👇️ set to true
    setIsClicked((prev) => !prev);
    detailsHandler('size', size);
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
      className={`rounded-full ml-3 w-14 h-14 items-center ${
        isClicked && 'bg-orange-200 border border-orange-400'
      }`}
    >
      <Image
        source={image}
        className='h-10 w-10'
        style={{ resizeMode: 'contain' }}
      />
      <Text className='text-gray-300 text-[10px] mt-2'>{name}</Text>
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

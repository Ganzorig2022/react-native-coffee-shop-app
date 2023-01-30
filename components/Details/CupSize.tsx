import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';
import { GlobalStyles } from '../../constants/GlobalStyles';

const CupSize = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleSelect = () => {
    // 👇️ set to true
    setIsClicked((prev) => !prev);
  };

  return (
    <View className='mt-5'>
      <View className='flex-row items-center justify-center space-x-8'>
        <Pressable
          onPress={toggleSelect}
          style={({ pressed }) => pressed && styles.pressed}
          android_ripple={{
            color: GlobalStyles.colors.orange,
            borderless: true,
            radius: 40,
          }}
          className={`h-12 w-12 items-center rounded-full  ${
            isClicked && 'bg-orange-200 border border-orange-400'
          }`}
        >
          <Image
            source={require('../../assets/cups/8oz.png')}
            className='h-10 w-10'
            style={{ resizeMode: 'contain' }}
          />
        </Pressable>
        <Image
          source={require('../../assets/cups/12oz.png')}
          className='h-10 w-10'
          style={{ resizeMode: 'contain' }}
        />
        <Image
          source={require('../../assets/cups/16oz.png')}
          className='h-10 w-10'
          style={{ resizeMode: 'contain' }}
        />
        <Image
          source={require('../../assets/cups/20oz.png')}
          className='h-10 w-10'
          style={{ resizeMode: 'contain' }}
        />
        <Image
          source={require('../../assets/cups/24oz.png')}
          className='h-10 w-10'
          style={{ resizeMode: 'contain' }}
        />
      </View>
    </View>
  );
};

export default CupSize;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    // backgroundColor: GlobalStyles.colors.orange,
    borderRadius: 20,
  },
});

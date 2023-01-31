import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import DropDown from '../ui/DropDown';
import {
  MilkItems,
  FoamItems,
  WhippingCreamItems,
} from '../../constants/DropDownItems';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/GlobalStyles';
import SubmitButton from '../ui/SubmitButton';

type ClickedType = {
  milk: boolean;
  foam: boolean;
  whip: boolean;
  shot: boolean;
};

const FlavourChanges = () => {
  const [milkOpen, setMilkOpen] = useState(false);
  const [foamOpen, setFoamOpen] = useState(false);
  const [whippingOpen, setWhippingOpen] = useState(false);
  const [isClicked, setIsClicked] = useState({
    milk: false,
    foam: false,
    whip: false,
    shot: false,
  });
  const [shotsValue, setShotsValue] = useState(0);

  const clickHandler = (value: string) => {
    setIsClicked((state) => {
      return { ...state, [value]: !state[value as keyof ClickedType] };
    });
  };

  const increment = () => {
    setShotsValue((prev) => prev + 1);
  };
  const decrement = () => {
    if (shotsValue > 0) setShotsValue((prev) => prev - 1);
  };

  return (
    <View className='py-5 mx-5 flex-1'>
      <Text className='font-bold text-[#2D2A2B]'>Flavour changes</Text>

      <DropDown
        id={'milk'}
        type={'Milk'}
        items={MilkItems}
        open={milkOpen}
        setOpen={setMilkOpen}
        isClicked={isClicked.milk}
        clickHandler={clickHandler}
      />

      <TouchableOpacity className='' onPress={() => clickHandler('shot')}>
        <Text
          className={`${
            !isClicked.shot ? 'text-gray500' : 'text-customOrange'
          } text-sm mt-5`}
        >
          Shot
        </Text>
        <View className='flex-row items-center justify-between border-gray100 border-2 rounded-md flex-auto h-12'>
          <View className='p-2'>
            <Text>{shotsValue} shots</Text>
          </View>
          <View className='flex-row items-center justify-between space-x-4 ml-5 p-2'>
            <Ionicons
              name='remove-outline'
              size={24}
              color={`${isClicked.shot ? GlobalStyles.colors.orange : 'black'}`}
              onPress={() => {
                clickHandler('shot');
                decrement();
              }}
            />
            <Text>{shotsValue}</Text>
            <Ionicons
              name='add'
              size={24}
              color={`${isClicked.shot ? GlobalStyles.colors.orange : 'black'}`}
              onPress={increment}
            />
          </View>
        </View>
      </TouchableOpacity>

      <DropDown
        id={'foam'}
        type={'Foam'}
        items={FoamItems}
        open={foamOpen}
        setOpen={setFoamOpen}
        isClicked={isClicked.foam}
        clickHandler={clickHandler}
      />
      <DropDown
        id={'whip'}
        type={'Whipping cream'}
        items={WhippingCreamItems}
        open={whippingOpen}
        setOpen={setWhippingOpen}
        isClicked={isClicked.whip}
        clickHandler={clickHandler}
      />

      <View className=''>
        <SubmitButton
          bgColor={GlobalStyles.colors.orange}
          textColor={'white'}
          title={'Add to bag'}
        />
      </View>
    </View>
  );
};

export default FlavourChanges;

const styles = StyleSheet.create({});

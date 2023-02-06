import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useEffect, useState } from 'react';
import DropDown from '../ui/DropDown';
import {
  MilkItems,
  FoamItems,
  WhippingCreamItems,
} from '../../constants/DropDownItems';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/GlobalStyles';

type ClickedType = {
  milk: boolean;
  foam: boolean;
  whip: boolean;
  shot: boolean;
};

type Props = {
  detailsHandler: (name: string, value: string) => void;
};

const FlavourChanges = ({ detailsHandler }: Props) => {
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

  //incrementing shot's value
  const increment = () => {
    setShotsValue((prev) => prev + 1);
  };
  const decrement = () => {
    if (shotsValue > 0) setShotsValue((prev) => prev - 1);
  };

  useEffect(() => {
    detailsHandler('shot', shotsValue.toString());
  }, [shotsValue]);

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
        detailsHandler={detailsHandler}
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
            <Pressable
              onPress={() => {
                clickHandler('shot');
                decrement();
              }}
              // onPressOut={() => console.log('asd')}
            >
              <Ionicons
                name='remove-outline'
                size={24}
                color={`${
                  isClicked.shot ? GlobalStyles.colors.orange : 'black'
                }`}
              />
            </Pressable>
            <Text>{shotsValue}</Text>
            <Pressable onPress={increment}>
              <Ionicons
                name='add'
                size={24}
                color={`${
                  isClicked.shot ? GlobalStyles.colors.orange : 'black'
                }`}
              />
            </Pressable>
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
        detailsHandler={detailsHandler}
      />
      <DropDown
        id={'whip'}
        type={'Whipping cream'}
        items={WhippingCreamItems}
        open={whippingOpen}
        setOpen={setWhippingOpen}
        isClicked={isClicked.whip}
        clickHandler={clickHandler}
        detailsHandler={detailsHandler}
      />
    </View>
  );
};

export default FlavourChanges;

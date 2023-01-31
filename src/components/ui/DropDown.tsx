import { StyleSheet, Text, View } from 'react-native';
import { useState, SetStateAction, Dispatch } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { GlobalStyles } from '../../constants/GlobalStyles';

type Props = {
  id: string;
  type: string;
  items: ItemsType[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isClicked: boolean;
  clickHandler: (value: string) => void;
  //   setIsClicked: Dispatch<SetStateAction<ClickedType>>;
  //   setValue: Dispatch<SetStateAction<string>>;
};

const DropDown = ({
  id,
  type,
  items,
  open,
  setOpen,
  isClicked,
  clickHandler,
}: Props) => {
  const [data, setData] = useState<string>('');
  const [value, setValue] = useState('');

  return (
    <View>
      <Text
        className={`${
          !isClicked ? 'text-gray500' : 'text-customOrange'
        } text-sm mt-5`}
      >
        {type}
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        dropDownDirection='BOTTOM'
        listMode='SCROLLVIEW' //for preventing from ScrollView error
        // setItems={() => setData(value)}
        style={{
          borderColor: isClicked
            ? GlobalStyles.colors.orange
            : GlobalStyles.colors.gray100,
          backgroundColor: '',
          borderWidth: 2,
          marginTop: 5,
          zIndex: 1,
        }}
        onPress={() => clickHandler(id)}
        onClose={() => clickHandler(id)}
        onSelectItem={() => clickHandler(id)}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({});

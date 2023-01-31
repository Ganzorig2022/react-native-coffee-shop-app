import { View, FlatList } from 'react-native';
import { cups } from '../../constants/Cups';
import PressableCup from './PressableCup';

const CupSize = () => {
  return (
    <View className='m-5'>
      <FlatList
        data={cups}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PressableCup {...item} />}
      />
    </View>
  );
};

export default CupSize;

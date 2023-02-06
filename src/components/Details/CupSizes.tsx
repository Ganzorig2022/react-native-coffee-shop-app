import { View, FlatList } from 'react-native';
import { cups } from '../../constants/Cups';
import PressableCup from './PressableCup';

type Props = {
  detailsHandler: (name: string, value: string) => void;
};

const CupSize = ({ detailsHandler }: Props) => {
  return (
    <View className='m-5 h-16'>
      <FlatList
        data={cups}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PressableCup {...item} detailsHandler={detailsHandler} />
        )}
      />
    </View>
  );
};

export default CupSize;

import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Layout from '../components/ui/Layout';
import BackButton from '../components/ui/BackButton';
import OrderItem from '../components/Order/OrderItem';
import { useTypedSelector } from '../redux/hooks';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import { Tab, TabView, Text } from '@rneui/themed';
import { GlobalStyles } from '../constants/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useRecoilValue } from 'recoil';
import { documentIdState } from '../recoil/userIdAtom';

type OrderProps = NativeStackNavigationProp<RootStackParamList, 'Order'>;

interface AllSuccessType extends Products {
  createdAt: Date;
}

const OrderScreen = () => {
  const items = useTypedSelector(selectCartItems); //from REDUX
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<OrderProps>();
  const [allSuccess, setAllSuccess] = useState<AllSuccessType[]>([]);
  const documentId = useRecoilValue(documentIdState); //from RECOIL

  const getData = async () => {
    const docRef = doc(db, 'Orders', documentId as any);
    const docSnap = await getDoc(docRef);

    let AllSuccess = [] as AllSuccessType[];

    if (docSnap.exists()) {
      // console.log(docSnap.data());
      AllSuccess.push(...Object.values(docSnap.data()));
    } else {
      console.log('No such document!');
    }
    setAllSuccess(AllSuccess);
  };

  useEffect(() => {
    //if there is document Id, then fetch data from FIREBASE
    if (documentId.documentId !== '') {
      getData();
    }
  }, []);

  return (
    <Layout>
      <BackButton title={'My Orders'} />
      <View className='flex-col justify-center items-start w-full mt-3 p-5'>
        <View className='items-start justify-between'>
          {/* Tabs */}
          <>
            <Tab
              value={index}
              onChange={setIndex}
              dense
              indicatorStyle={{ backgroundColor: GlobalStyles.colors.orange }}
              titleStyle={{ color: 'black' }}
            >
              <Tab.Item>Processing </Tab.Item>
              <Tab.Item>Success</Tab.Item>
              <Tab.Item>Cancelled</Tab.Item>
            </Tab>
          </>
          {/* FLATLIST */}
          <FlatList
            data={allSuccess}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <OrderItem {...item} index={index} />}
            // style={{ maxHeight: '100%' }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default OrderScreen;

import axios from 'axios';

// type Props = {
//   choice: string;
// };
export const fetchProducts = async () => {
  //https://sampleapis.com/api-list/coffee
  const res = await axios.get<any>(`https://api.sampleapis.com/coffee/hot`);
  const products = await res.data;

  return products;
};

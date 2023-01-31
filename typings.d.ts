interface Ingredient {}

interface ProductType {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: string;
}

interface ItemsType {
  label: string;
  value: string;
}

interface Products {
  id: string;
  title: string;
  amount: number;
  price: number;
  description: string;
}
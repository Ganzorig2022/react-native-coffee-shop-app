interface UserContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

interface ProductType {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: string;
}

interface Products {
  id: string;
  title: string;
  amount: number;
  price: number;
  description: string;
  image: string;
  details: CoffeeDetailsType;
  // createdAt: Date;
}

interface ItemsType {
  label: string;
  value: string;
}

interface CoffeeDetailsType {
  size: string;
  milk: string;
  shot: string;
  foam: string;
  whip: string;
}

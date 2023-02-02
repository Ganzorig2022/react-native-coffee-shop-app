import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// 1) type defintion for initialstate below...
interface CartState {
  items: Products[];
}

// 2) shareable STATE --> Global State
const initialState: CartState = {
  items: [],
};

// 3) Creating cartSlice
export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 3.1) Add items to cart function
    addToCart: (state: CartState, action: PayloadAction<Products>) => {
      //keep previous items, then add new items by "action.payload"
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{ id: string }>
    ) => {
      // find item's INDEX
      const index = state.items.findIndex(
        (item: Products) => item.id === action.payload.id
      );

      let newCart = [...state.items];

      // Removing exact element from an array using splice method
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log(
          `Can not remove product (id: ${action.payload.id}) as it is not in the cart!`
        );
      }

      // re-assigning cart array
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

//SELECTORS
// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsWithId = (state: RootState, id: string) => {
  return state.cart.items.filter((item: Products) => item.id === id);
};

export const selectCartTotal = (state: RootState) => {
  return state.cart.items.reduce(
    (total: number, item: Products) => (total += item.price),
    0
  );
};

export default cartSlice.reducer;

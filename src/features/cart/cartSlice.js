import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [
    {
      pizzaID: 12,
      name: 'Mediterrenean',
      quantity: 2,
      itemPrice: 16,
      totalPrice: 16,
    },
  ],
};

const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //action.payload = object of pizza
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //action.payload = id of pizza
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaID === action.payload,
      );
    },
    increaseItems(state, action) {
      const item = state.cart.find(item.pizzaID === action.payload);

      item.quantity++;
    },
    decreaseItem(state, action) {},
    clearCart(state, action) {},
  },
});
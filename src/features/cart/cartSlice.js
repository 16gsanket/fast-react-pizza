import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
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
      state.cart = state.cart.filter((pizza) => pizza.pizzaId !== action.payload );
    },
    increaseItems(state, action) {
      const item = state.cart.find(item=> item.pizzaId === action.payload);

        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      
      console.log(item)
    },
    decreaseItem(state, action) {
      const item = state.cart.find(item=> item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if(item.quantity === 0) cartslice.caseReducers.deleteItem(state,action)
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItems, decreaseItem, clearCart } =
  cartslice.actions;

export default cartslice.reducer;

export const getCart = (state)=>state.cart.cart

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

// export const getPizzaQuantity = id => state =>( state.cart.cart.find(pizza => (pizza.quantity > 1)?. pizza ?? null))

export function getPizzaQuantity(id) {
  return function (state) {
    const foundItem = state.cart.cart.find(function (item) {
      return item.pizzaId === id;
    });
 
    return foundItem ? foundItem.quantity : 0;
  };
}

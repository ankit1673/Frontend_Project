import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  PriceTotal: 0,
  QunatityTotal: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, actions) => {
      const findData = state.cartItems.findIndex((value) => {
        return value.id === actions.payload.id;
      });

      if (findData != -1) {
        state.cartItems[findData] = {
          ...state.cartItems[findData],
          qunatity: state.cartItems[findData].qunatity + 1,
        };
      } else {
        state.cartItems.push({ ...actions.payload, qunatity: 1 });
      }
    },

    DeleteItem: (state, actions) => {
      state.cartItems = state.cartItems.filter((value) => {
        return value.id !== actions.payload.id;
      });
    },

    CartTotal: (state) => {
      const { totalPrice, totalQunatity } = state.cartItems.reduce(
        (cartTotal, cartItems) => {
          const { price, qunatity } = cartItems;
          const itemTotal = parseFloat(price) * parseInt(qunatity);
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQunatity += qunatity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQunatity: 0,
        }
      );
      state.PriceTotal = totalPrice;
      state.QunatityTotal = totalQunatity;
    },
  },
});

export const { AddToCart, DeleteItem, CartTotal } = cartSlice.actions;

export default cartSlice.reducer;

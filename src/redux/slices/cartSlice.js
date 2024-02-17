import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  favourites: [],
  favTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => newItem.id === item.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems = [
          ...state.cartItems,
          {
            id: newItem.id,
            productName: newItem.productName,
            imgUrl: newItem.imgUrl,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
          },
        ];
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.id === existingItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + newItem.price,
              }
            : item
        );
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
    },

    deleteItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
    },

    addQuantity: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.totalQuantity++;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
    },

    subtractQuantity: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem.quantity <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        );
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        state.totalQuantity--;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      );
    },
    addToFavourties: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.favourites.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.favourites = [...state.favourites, newItem];
        state.favTotal++;
      } else {
        state.favourites = state.favourites.filter(
          (item) => item.id !== newItem.id
        );
        state.favTotal--;
      }
    },
    emptyCart: (state, action) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

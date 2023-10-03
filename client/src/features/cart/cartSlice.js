import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
});

export default cartSlice.reducer;

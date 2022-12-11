import { createSlice } from "@reduxjs/toolkit";
import { findIntraDayBySymbolThunk } from "./stockSearch-thunks";

const initialState = {
  stocks: [],
  loading: false,
}

const stockSearchReducer = createSlice({
  name: 'stock',
  initialState,
  extraReducers: {
    [findIntraDayBySymbolThunk.fulfilled]: (state, action) => {
      state.stocks = action.payload
    }
  }
})

export default stockSearchReducer.reducer
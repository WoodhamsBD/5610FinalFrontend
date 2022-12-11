import { createSlice } from "@reduxjs/toolkit";
import { findRandomJokeThunk, findJokeForTermThunk } from "./joke-thunks";

const initialState = {
  joke: [],
  loading: false,
  jokes: []
}

const randomJokeReducer = createSlice({
  name: 'joke',
  initialState,
  extraReducers: {
    [findRandomJokeThunk.fulfilled]: (state, action) => {
      state.joke = action.payload
    },
    [findJokeForTermThunk.fulfilled]: ( state, action) => {
      state.jokes = action.payload
    }
  }
})

export default randomJokeReducer.reducer

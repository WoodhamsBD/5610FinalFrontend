import { createSlice } from "@reduxjs/toolkit";
import { findRandomJokeThunk, findJokeForTermThunk, findJokeByIDThunk } from "./joke-thunks";

const initialState = {
  joke: [],
  loading: false,
  jokes: [],
  details: {}
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
    },
    [findJokeByIDThunk.fulfilled]: (state, action) => {
      state.details = action.payload
    }
  }
})

export default randomJokeReducer.reducer

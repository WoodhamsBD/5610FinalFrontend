import { createSlice } from "@reduxjs/toolkit";

import { createCommentThunk, findCommentsByAuthorThunk, findCommentsByJokeIDThunk } from "./comment-thunks";

const commentReducer = createSlice({
  name: 'comments',
  initialState: {
    comments: []
  },
  extraReducers: {
    [createCommentThunk.fulfilled]: (state, action) => {
      state.comments.push(action.payload)
    },
    [findCommentsByAuthorThunk.fulfilled]: (state,action) => {
      state.comments = action.payload
    },
    [findCommentsByJokeIDThunk.fulfilled]: ( state, action ) => {
      state.comments = action.payload
    }
  }
})

export default commentReducer.reducer
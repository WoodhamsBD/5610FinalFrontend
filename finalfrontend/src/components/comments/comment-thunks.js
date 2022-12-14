import { createAsyncThunk } from "@reduxjs/toolkit";
import {createComment, findCommentsByAuthor, findCommentsByJokeID} from "./comment-service"

export const createCommentThunk = createAsyncThunk(
  'createComment', async (comment) => createComment(comment)
)

export const findCommentsByJokeIDThunk = createAsyncThunk(
  'findCommentByJokeIDThunk', async(jokeID) => findCommentsByJokeID(jokeID)
)

export const findCommentsByAuthorThunk = createAsyncThunk(
  'findCommentsByAuthorThunk', async (author) => findCommentsByAuthor(author)
)
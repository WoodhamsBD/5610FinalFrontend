import { createAsyncThunk } from "@reduxjs/toolkit";
import { findRandomJoke, findJokeForTerm } from "./joke-service";


export const findRandomJokeThunk = createAsyncThunk(
  'findRanomJoke', () => findRandomJoke()
)

export const findJokeForTermThunk = createAsyncThunk(
  'findJokeForTerm', (term) => findJokeForTerm(term)
)
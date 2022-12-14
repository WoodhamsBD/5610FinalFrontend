import { createAsyncThunk } from "@reduxjs/toolkit";
import { findRandomJoke, findJokeForTerm, findJokeByID } from "./joke-service";


export const findRandomJokeThunk = createAsyncThunk(
  'findRanomJoke', () => findRandomJoke()
)

export const findJokeForTermThunk = createAsyncThunk(
  'findJokeForTerm', (term) => findJokeForTerm(term)
)

export const findJokeByIDThunk = createAsyncThunk(
  'findJokeByID', (jid) => findJokeByID(jid)
)
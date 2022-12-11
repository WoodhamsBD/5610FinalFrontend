import { createAsyncThunk } from "@reduxjs/toolkit";
import { findIntraDayBySymbol } from "./stockSearch-service";

export const findIntraDayBySymbolThunk = createAsyncThunk(
  'findIntraDayBySymbol',
  (term) => findIntraDayBySymbol(term)
)
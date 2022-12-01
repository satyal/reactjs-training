import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://run.mocky.io/v3/14461ea8-036c-4d1b-87f5-0f50631a00a3";

export const getAPIData = createAsyncThunk(
  "api/getAPIData",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get(URL);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    fetching: false,
    data: [],
    error: "",
  },
  reducers: {
    //: Synchronus actions if any come here
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAPIData.pending, (state, action) => {
        state.fetching = true;
        state.data = [];
        state.error = "";
      })
      .addCase(getAPIData.fulfilled, (state, action) => {
        state.data = action?.payload?.data;
        state.fetching = false;
      })
      .addCase(getAPIData.rejected, (state, action) => {
        state.error = action?.payload;
        state.fetching = false;
      });
  },
});

export const apiReducer = apiSlice.reducer;

//export const {} = apiSlice.actions;

/**
 * Promise states:
 * pending --> fullfilled
 * pending --> reject
 */

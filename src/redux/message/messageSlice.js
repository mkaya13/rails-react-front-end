import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const FETCH_MESSAGE = "/RAILS-REACT-ONE-APP/FETCH_MESSAGES";

export const getMessage = createAsyncThunk(FETCH_MESSAGE, async () => {
  const response = await fetch("http://127.0.0.1:3000/api/v1/messages");
  const data = await response.json();
  return data;
});

const messageSlice = createSlice({
  name: "message",
  initialState: {
    id: null,
    name: "",
    created_at: "",
    updated_at: "",
    isLoading: false,
    successful: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(getMessage.pending, (state) => ({
      ...state,
      isLoading: true,
      error: "",
    }));

    builder.addCase(getMessage.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      successful: true,
      name: action.payload,
    }));

    builder.addCase(getMessage.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  },
});

export default messageSlice.reducer;

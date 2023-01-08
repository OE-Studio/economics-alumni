import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  status: 'idle',
  item: []
}

// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

export const fetchGive = createAsyncThunk(
  'give/fetchGive', async () => {
    const response = axios.get(`${baseURL}/give/get-give-requests`)
    return response
  }
)

const giveSlice = createSlice({
  name: 'give',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGive.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchGive.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.GiveRequest]
    });
    builder.addCase(fetchGive.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})


export default giveSlice.reducer;
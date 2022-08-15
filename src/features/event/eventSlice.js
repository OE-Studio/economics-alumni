import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  status: 'idle',
  item: []
}

// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

export const fetchEvent = createAsyncThunk(
  'event/fetchEvent', async () => {
    const response = axios.get(`${baseURL}/event/get-event`)
    return response
  }
)

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvent.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchEvent.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.Events]
    });
    builder.addCase(fetchEvent.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})


export default eventSlice.reducer;
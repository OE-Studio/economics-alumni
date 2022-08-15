import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  status: 'idle',
  item: []
}

// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

export const fetchMember = createAsyncThunk(
  'member/fetchMember', async () => {
    const response = axios.get(`${baseURL}/member/get-member`)
    return response
  }
)

const memberSlice = createSlice({
  name: 'event',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMember.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchMember.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.Members]
    });
    builder.addCase(fetchMember.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})


export default memberSlice.reducer;
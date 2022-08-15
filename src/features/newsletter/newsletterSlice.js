import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  status: 'idle',
  item: []
}

// const baseURL = "http://localhost.:3001";
const baseURL = "https://uieaa.herokuapp.com";

export const fetchNewsletter = createAsyncThunk(
  'newsletter/fetchNewsletter', async () => {
    const response = axios.get(`${baseURL}/newsletter/get-newsletter`)
    return response
  }
)

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsletter.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchNewsletter.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.Newsletters]
    });
    builder.addCase(fetchNewsletter.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})


export default newsletterSlice.reducer;
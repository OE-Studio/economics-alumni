import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  status: 'idle',
  item: []
}

export const fetchImage = createAsyncThunk(
  'image/fetchImage', async () => {
    const response = axios.get("https://htprtp.herokuapp.com/image/get-image")
    return response
  }
)

const imageSlice = createSlice({
  name: 'research',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImage.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchImage.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.Images]
    });
    builder.addCase(fetchImage.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})


export default imageSlice.reducer;

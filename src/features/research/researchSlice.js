import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  status: 'idle',
  item: []
}

export const fetchResearch = createAsyncThunk(
  'research/fetchResearch', async () => {
    const response = axios.get("https://htprtp.herokuapp.com/research/get-research")
    return response
  }
)

const researchSlice = createSlice({
  name: 'research',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResearch.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchResearch.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.Researches]
    });
    builder.addCase(fetchResearch.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})


export default researchSlice.reducer;
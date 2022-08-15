import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {
  status: 'idle',
  item: []
}

// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

export const fetchImpacts = createAsyncThunk(
  'impact/fetchImpact', async () => {
    const response = axios.get(`${baseURL}/impact/get-impacts`)
    return response
  }
)




const impactSlice = createSlice({
  name: 'impact',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImpacts.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchImpacts.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.Impacts]
    });
    builder.addCase(fetchImpacts.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})

export default impactSlice.reducer

export { }
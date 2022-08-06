import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {
  status: 'idle',
  item: []
}

export const fetchTraining = createAsyncThunk(
  'training/fetchTraning', async () => {
    const response = axios.get("https://htprtp.herokuapp.com/training/get-training")
    return response
  }
)




const trainingSlice = createSlice({
  name: 'research',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTraining.pending, (state, action) => {
      state.status = "pending"
    });
    builder.addCase(fetchTraining.fulfilled, (state, { payload }) => {
      state.status = "fulfilled"
      state.item = [...payload.data.Trainings]
    });
    builder.addCase(fetchTraining.rejected, (state, { payload }) => {
      state.status = "failed"

    })
  }
})

export default trainingSlice.reducer

export { }
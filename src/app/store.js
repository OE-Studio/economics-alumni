import { configureStore } from '@reduxjs/toolkit';

import researchReducer from '../features/research/researchSlice';
import trainingReducer from '../features/training/trainingSlice';
import imageReducer from '../features/image/imageSlice';

 const store = configureStore({
  reducer: {
    research: researchReducer,
    training: trainingReducer,
    image: imageReducer
  },
});

export default store;
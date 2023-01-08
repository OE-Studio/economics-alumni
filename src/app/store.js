import { configureStore } from '@reduxjs/toolkit';

import newsletterReducer from '../features/newsletter/newsletterSlice';
import imageReducer from '../features/image/imageSlice';
import impactReducer from '../features/impact/impactSlice';
import eventReducer from '../features/event/eventSlice';
import memberReducer from '../features/member/memberSlice';
import giveReducer from '../features/give/giveSlice';


 const store = configureStore({
  reducer: {
    newsletter: newsletterReducer,
    image: imageReducer,
    impact: impactReducer,
    event: eventReducer,
    member: memberReducer,
    give: giveReducer
  },
});

export default store;
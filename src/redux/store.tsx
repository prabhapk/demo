import { configureStore } from '@reduxjs/toolkit';
import threeDigitSlice from './Slice/threeDigitSlice';
import commonSlice from './Slice/commonSlice';
import  LoaderSlice  from './Slice/loaderSlice';

export const store = configureStore({
  reducer: {
    threeDigit: threeDigitSlice,
    commonSlice:commonSlice,
    LoaderSlice:LoaderSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
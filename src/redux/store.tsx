import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Slice/counterSlice';
import commonSlice from './Slice/commonSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    commonSlice:commonSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
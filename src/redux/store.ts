import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";
import globalReducer from "./features/auth/globalSlice";

const persistConfig = {
  key: "auth",
  storage,
};
const globalPersistConfig = {
  key: "global",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const persistedGlobalReducer = persistReducer(
  globalPersistConfig,
  globalReducer
);

// redux setup video
// after intial setup in part 1 last video - 26:10
//  then part2 -- module 27-4
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    global: globalReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

// to add baseApi to store we need to add
/**
 * [baseApi.reducerPath]: baseApi.reducer,
 * middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
 these two lines
 * */

import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartSlice from "./features/cart/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cartProduct",
  storage,
};

const persistCartReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persistCartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

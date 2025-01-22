import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist";
import storage from "redux-persist/lib/storage"; // Correct import for localStorage
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import StateCounter from "./State.Reducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  StateCounter,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

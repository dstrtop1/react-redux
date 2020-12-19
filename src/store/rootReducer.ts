import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "../pages/AppSlice";

const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

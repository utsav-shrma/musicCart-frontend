import { configureStore } from "@reduxjs/toolkit";
import utilityReducer from "./utilitySlice";

const store = configureStore({
  reducer: {
    utility: utilityReducer,
  },
});

export default store;
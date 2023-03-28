import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import messageSlice from "./message/messageSlice";

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    message: messageSlice,
  },
});

export default store;

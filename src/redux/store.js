import { configureStore } from "@reduxjs/toolkit";
import userPhoneNumber from "../redux/slices/phoneNumber";
import isLogin from "./slices/isLogin";

const store = configureStore({
  reducer: {
    userPhoneNumber: userPhoneNumber,
    isLogin: isLogin,
  },
});

export default store;

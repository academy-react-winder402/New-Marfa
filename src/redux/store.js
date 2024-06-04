import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import userPhoneNumber from "../redux/slices/phoneNumber";
import isLogin from "./slices/isLogin";
=======
import phoneUser from './slices/phoneSlice'
import setFiltershow from "./slices/setFiltershow";
import showType  from "./slices/showType";
const store = configureStore({
    reducer:{
        phoneUser:phoneUser,
        setFiltershow:setFiltershow,
        showType:showType,
    }
})
>>>>>>> 7911b6104fc1a49e577937a10b9261d45016229c

const store = configureStore({
  reducer: {
    userPhoneNumber: userPhoneNumber,
    isLogin: isLogin,
  },
});

export default store;

/** @format */

import { configureStore } from "@reduxjs/toolkit";
import currentChattingUserReducer from "../features/currentChattingUser/currentChattingUserSlice";
import sendMailReducer from "../features/sendMail/sendMailSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
	reducer: {
		sendEmail: sendMailReducer,
		currentChattingUser: currentChattingUserReducer,
		user: userReducer,
	},
});

/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentChattingUser: null,
};

const currentChattingUserSlice = createSlice({
	name: "currentChattingUser",
	initialState,

	reducers: {
		setCurrentChattingUserState: (state, action) => {
			state.currentChattingUser = action.payload;
		},
	},
});

export const { setCurrentChattingUserState } = currentChattingUserSlice.actions;

export const selectCurrentChattingUser = (state) =>
	state.currentChattingUser.currentChattingUser;

export default currentChattingUserSlice.reducer;

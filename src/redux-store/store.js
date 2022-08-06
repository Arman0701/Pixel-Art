import { configureStore } from "@reduxjs/toolkit";
import initialSettingsSlice from "./initialSettingsSlice";
import boardSlice from "./boardSlice";

export default configureStore({
	reducer: {
		initialSettingsSlice,
		boardSlice,
	}
})
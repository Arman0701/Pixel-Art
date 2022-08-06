import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	drawingStarted: false,
	pictureName: "",
	width: 8,
	height: 8,
}

export const initialSettingsSlice = createSlice({
    name: "initialSettings",
    initialState,
    reducers: {
        getPictureName: (state, { payload }) => {
			state.pictureName = payload
		},
        getPictureWidth: (state, { payload }) => {
			if (payload > 0 && payload <= 30) state.width = payload
			else return;
		},
        getPictureHeight: (state, { payload }) => {
			if (payload > 0 && payload <= 30) state.height = payload
			else return;
		},
        startDrawing: (state) => {
			if (!state.pictureName) state.pictureName = "Picture";
			state.drawingStarted = true
		},
		toggleStateError: (state) => {
			state.isError = !state.isError
		},
		resetApp: (state) => {
			state.drawingStarted = false
			state.pictureName = ''
			state.width = 8
			state.height = 8
		},
    },
});

export const {
    getPictureHeight,
    getPictureWidth,
    getPictureName,
    startDrawing,
	toggleStateError,
	resetApp,
} = initialSettingsSlice.actions;

export default initialSettingsSlice.reducer;

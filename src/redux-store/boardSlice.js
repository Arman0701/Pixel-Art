import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
	name: "boardSlice",
	initialState: {
		board: [],
		color: "#000000",
	},
	reducers: {
		createBoard: (state, {payload}) => {
			state.board = Array.from(Array(payload.width * payload.height)).map((item, index) => ({
				id: index,
				color: '#FFFFFF'
			}))
		},
		changeColor: (state, {payload}) => {
			state.board = state.board.map(item => {
				if (item.id === payload.id) {
					return {...item, color: payload.color}
				}
				return item
			})
		}
	}
});

export const {
	changeColor,
	createBoard,
} = boardSlice.actions;

export default boardSlice.reducer;
import style from './Board.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';
import { createBoard } from '../../redux-store/boardSlice';
import { resetApp } from '../../redux-store/initialSettingsSlice';
import { exportComponentAsPNG } from 'react-component-export-image';
import Cell from '../Cell/Cell';
import arrowLeftIcon from '../../assets/icons/arrow-left-solid.svg';

export default function Board() {
	const board = useSelector(state => state.boardSlice.board)	
	const {pictureName, width, height} = useSelector(state => state.initialSettingsSlice)
	const colorRef = useRef();
	const boardRef = useRef();
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(createBoard({width, height}))
	}, []);

	const save = useCallback(()  => {
		exportComponentAsPNG(boardRef, {fileName: pictureName});
	}, [])
	const reset = useCallback(() => {
		dispatch(resetApp())
	}, []);
	const earseBoard = useCallback(() => {
		dispatch(createBoard({width, height}))
	}, []);

	return (
		<div className={style.boardWrapper}>
			<div className={style.topPanel}>
				<div className={style.information}>
					<div onClick={reset} className={style.resetButton}><img src={arrowLeftIcon} alt="arrow left" /></div>
					<p>{pictureName}.png <span>{width}x{height} pixels</span></p>
					<div onClick={save} className={style.saveButton}>Download</div>
				</div>
				<div className={style.picker}>
					<input type="color" ref={colorRef} defaultValue="#000000" />
					<div onClick={earseBoard} className={style.earseButton}>Earse board</div>
				</div>
			</div>
			<div 
				className={style.board}
				style={{
					width: width * 25
				}}
				ref={boardRef}
			>
				{
					board.map((item, index) => <Cell key={index} item={item} colorRef={colorRef}/>) 
				}
			</div>
		</div>
	)
}
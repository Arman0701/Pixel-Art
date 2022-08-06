import style from "./StartWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
    getPictureHeight,
    getPictureName,
    getPictureWidth,
	startDrawing,
} from "../../redux-store/initialSettingsSlice";

export default function StartWindow() {
    const { width, height, pictureName } = useSelector(
        (state) => state.initialSettingsSlice
    );
    const dispatch = useDispatch();

    function pictureNameChange(e) {
        dispatch(getPictureName(e.target.value));
    }
    function pictureWidthChange(e) {
        dispatch(getPictureWidth(e.target.value));
    }
    function pictureHeightChange(e) {
        dispatch(getPictureHeight(e.target.value));
    }
    function startDraw() {
        dispatch(startDrawing());
    }

    return (
		<>
			<p className={style.description}>
                This ia simple and lightwieght pixel drawing application for demonstration.
            </p>
			<div className={style.startWindowWrapper}>
				<div className={style.titleInput}>
					<p>Set picture name</p>
					<input
						type="text"
						autoFocus
						value={pictureName}
						onChange={pictureNameChange}
					/>
				</div>
				<div className={style.dimensionsWrapper}>
					<p>Set picture dimensions</p>
					<div className={style.inputs}>
						<div className={style.dimensionsInputWrapper}>
							<input
								type="number"
								value={width}
								onChange={pictureWidthChange}
							/>
							<p>Width</p>
						</div>
						<div className={style.dimensionsInputWrapper}>
							<input
								type="number"
								value={height}
								onChange={pictureHeightChange}
							/>
							<p>Height</p>
						</div>
					</div>
				</div>
				<button className={style.startButton} onClick={startDraw}>
					Start drawing
				</button>
			</div>
		</>
    );
}

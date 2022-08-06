import { memo } from "react";
import { changeColor } from "../../redux-store/boardSlice";
import { useDispatch } from "react-redux";
import style from "./Cell.module.css";

export default memo(
    function Cell({ item, colorRef }) {
        const dispatch = useDispatch();
        console.log("Log item.id ::: ", item.id);
        function handleColoring() {
            dispatch(
                changeColor({
                    id: item.id,
                    color: colorRef.current.value,
                })
            );
        }
        function handleDragOver() {
            dispatch(
                changeColor({
                    id: item.id,
                    color: colorRef.current.value,
                })
            );
        }

        return (
            <div
                onDragOver={handleDragOver}
                onClick={handleColoring}
                className={style.cellWrapper}
                style={{ backgroundColor: item.color }}
            ></div>
        );
    },
);

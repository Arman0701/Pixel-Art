import { useSelector } from "react-redux";
import style from "./App.module.css";
import Board from "./Components/Board";
import Header from "./Components/Header";
import StartWindow from "./Components/StartWindow";

export default function App() {
    const started = useSelector(
        (state) => state.initialSettingsSlice.drawingStarted
    );

    return (
        <div className={style.App}>
            <Header />
            {!started ? <StartWindow /> : <Board />}
        </div>
    );
}
import React, {useState} from 'react';
import classes from './CheckQuestion.module.css'
import Popup from "../Popup/Popup";
import {Word} from "../../types/horizontalQuestion";


interface PropsType {
    clickCheckBtn: () => void
    answer: Word[] | null
    history: Array<Word[] | null>
}

const CheckQuestion: React.FC<PropsType> = ({clickCheckBtn, answer, history}) => {
    const [showPopup, setShowPopup] = useState<boolean>(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div className={classes.checkContainer}>
            <div className={classes.moveBtn}><i className={classes.arrowIcon + " material-icons left"}>keyboard_arrow_left</i> Назад</div>
            <div>
                <div
                    className={classes.checkBtn + " waves-effect"}
                    onClick={() => clickCheckBtn()}
                >Check</div>
                <div className={classes.checkBlock}>
                    <i
                        className={classes.moreIcon + " material-icons"}
                        onClick={togglePopup}
                    >more_vert</i>
                    <Popup showPopup={showPopup} answer={answer} history={history} />
                </div>

            </div>
            <div className={classes.moveBtn}>Далее<i className={classes.arrowIcon + " material-icons right"}>keyboard_arrow_right</i></div>
        </div>
    );
};

export default CheckQuestion;

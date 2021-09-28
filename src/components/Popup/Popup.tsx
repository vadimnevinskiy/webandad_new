import React from 'react';
import classes from "./Popup.module.css";
import {Word} from "../../types/horizontalQuestion";

interface PropsType {
    showPopup: boolean
    answer: Word[] | null,
    history: Array<Word[] | null>
}

const Popup: React.FC<PropsType> = ({showPopup, answer, history}) => {

    return (
        <div className={!showPopup ? classes.checkPopup : classes.checkPopup + ' ' + classes.showPopup}>
            {
                answer && answer.length > 0 &&
                <>
                    <div className={classes.popupTitle}>Правильный ответ</div>
                    <ul className={classes.correctAnswer}>
                        <li>
                            <div>
                                {
                                    answer.map(word => {
                                        return (
                                            <span key={word.id}>{word.value} </span>
                                        )
                                    })
                                }
                            </div>
                        </li>


                    </ul>
                </>
            }
            {
                history.length > 0 &&
                <>
                    <div className={classes.popupTitle}>История ответов</div>
                    <ul className={classes.correctAnswer}>

                        {
                            history.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {
                                            item &&
                                            <div>
                                                {
                                                    item.map(word => {
                                                        return (
                                                            <span key={word.id}>{word.value} </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </li>
                                )
                            })
                        }

                    </ul>
                </>
            }
            {
                answer?.length === 0 && history.length === 0 &&
                <div className={classes.popupTitle}>Нет ответов!</div>
            }
        </div>
    );
};

export default Popup;

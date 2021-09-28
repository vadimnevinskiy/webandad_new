import React from 'react';
import classes from "./QuestionTitle.module.css"

interface PropsType {
    number: number | null,
    title: string | null
}
const QuestionTitle: React.FC<PropsType> = ({number, title}) => {
    return (
        <div className={classes.questionBlock}>
            <div className={classes.questionNumber}>{number}</div>
            <div className={classes.questionTitle}>{title}</div>
        </div>
    );
};

export default QuestionTitle;

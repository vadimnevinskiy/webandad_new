import React from 'react';
import classes from "./CheckMark.module.css";


interface PropsType {
    correctClassName: string
}
const CheckMark: React.FC<PropsType> = ({correctClassName}) => {
    return (
        <>
            {
                correctClassName === 'correct' &&
                <i className={classes.doneIcon + " material-icons"}>done_all</i>
            }
            {
                correctClassName === 'incorrect' &&
                <i className={classes.doneIcon + " material-icons"}>error_outline</i>
            }
        </>
    );
};

export default CheckMark;

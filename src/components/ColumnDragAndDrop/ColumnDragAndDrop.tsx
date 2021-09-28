import React from 'react'
import classes from "./ColumnDragAndDrop.module.css"

const ColumnDragAndDrop = () => {
    return (
        <div className={classes.columns}>
            <div className={classes.column}>
                <div className={classes.columnHeader}>la</div>
                <div className={classes.columnContent}>
                    <div className={classes.columnDescription}>
                        <i className={classes.arrowIcon + " material-icons"}>arrow_downward</i><br/>
                        Перетяните<br/> слова сюда
                    </div>
                    1
                </div>
            </div>
            <div className={classes.column}>
                <div className={classes.columnHeader}>le</div>
                <div className={classes.columnContent}>
                    <div className={classes.columnDescription}>
                        <i className={classes.arrowIcon + " material-icons"}>arrow_downward</i><br/>
                        Перетяните<br/> слова сюда
                    </div>
                    2
                </div>
            </div>
        </div>
    );
};

export default ColumnDragAndDrop;

import React, {useCallback, useEffect, useState} from 'react';
import classes from "./HorizontalDragAndDrop.module.css"
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {Word} from "../../types/horizontalQuestion";
import CheckMark from "../../common/CheckMark/CheckMark";


interface PropsType {
    words: Word[] | null
    correctClassName: string
    updatedArray: (result: Word[]) => void
}


const HorizontalDragAndDrop: React.FC<PropsType> = ({words, correctClassName, updatedArray}) => {
    const [updatedArrayOfWords, setUpdatedArrayOfWords] = useState<Word[]>([]) //Local state for updated array of words


    //Set Updated array at local state on first loading
    useEffect(() => {
        if(words){
            setUpdatedArrayOfWords(words)
        }
    }, [])
    


    //Move word items
    const onDragEnd = (result: any) => {
        if (!result.destination) return; //If destination isn't droppable container

        const items = Array.from(updatedArrayOfWords);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)

        setUpdatedArrayOfWords(items); //Update local Array
        updatedArray(items) //Send updated array to HOC
    };





    return (
        <div className={correctClassName == 'correct' ? classes.lightBorder + ' ' + classes.correctAnswer : correctClassName == "incorrect" ? classes.lightBorder  + ' ' + classes.incorrectAnswer : classes.lightBorder }>
            <CheckMark correctClassName={correctClassName} />

            {
                updatedArrayOfWords.length > 0 &&
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="characters" direction="horizontal">
                        {(provided) => (
                            <div
                                className={classes.dragBlock}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {
                                    updatedArrayOfWords.map(({id, value}, index) => {
                                        return (
                                            <Draggable key={id} draggableId={value} index={index}>
                                                {(provided) => (
                                                    <div {...provided.draggableProps} {...provided.dragHandleProps}
                                                         ref={provided.innerRef} className={classes.dragItem}>
                                                        <span>{value}</span></div>
                                                )}
                                            </Draggable>
                                        )
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            }
        </div>
    );
};

export default HorizontalDragAndDrop;

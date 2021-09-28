import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import QuestionTitle from "../../components/QuestionTitle/QuestionTitle";
import ColumnDragAndDrop from "../../components/ColumnDragAndDrop/ColumnDragAndDrop";

const Column = () => {
    const data = {
        items: [
            {id: 0, content: "test0"},
            {id: 1, content: "test1"},
            {id: 2, content: "test2"},
            {id: 3, content: "test3"},
            {id: 4, content: "test4"},
            {id: 5, content: "test5"},
        ],
        selected: [
            {id: 6, content: "test6"},
            {id: 7, content: "test7"},
            {id: 8, content: "test8"},
            {id: 9, content: "test9"}
        ],
    };



    return (
        <div>
            <QuestionTitle number={1.5} title={"Раздели слова по колонкам"} />
            <ColumnDragAndDrop />
        </div>
    );
};

export default Column;

import React, {useEffect, useState} from 'react';
import QuestionTitle from "../../components/QuestionTitle/QuestionTitle";
import HorizontalDragAndDrop from "../../components/HorizontalDragAndDrop/HorizontalDragAndDrop";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import CheckQuestion from "../../components/CheckQuestion/CheckQuestion";
import {Word} from "../../types/horizontalQuestion";

interface ParseHistoryAnswer {
    historyString: string
    answerString: string
}


const Horizontal = () => {
    const {words, questionNumber, title} = useTypedSelector(state => state.horizontal.question) //Get words, questionNumber, title from Store
    const {history, answer, error} = useTypedSelector(state => state.horizontal) //Get history, answer, error from Store
    const {fetchHorizontalQuestion, setHistoryToStore, fetchHorizontalAnswer} = useActions() //Action creators
    const [historyWords, setHistoryWords] = useState<Word[]>([]) //Local state for saving history after each question update
    const [correctClassName, setCorrectClassName] = useState<string>('') //Local state for saving

    //Loading Question
    useEffect(() => {
        fetchHorizontalQuestion()
    }, [])


    // Parse lastArrayFromHistory and answer to string
    const parseLastHistoryAndAnswerToString = (lastArrayFromHistory: Word[], answer: Word[]): ParseHistoryAnswer => {
        const historyTemp = []
        const answerTemp = []
        const result = {
            historyString: '',
            answerString: ''
        }
        if (history.length > 0) {
            for (let i = 0; i < lastArrayFromHistory.length; i++) {
                historyTemp.push(lastArrayFromHistory[i].value)
            }
            result.historyString = historyTemp.join(' ').toLowerCase()
        }
        if (answer.length > 0) {
            for (let i = 0; i < answer.length; i++) {
                answerTemp.push(answer[i].value)
            }
            result.answerString = answerTemp.join(' ').toLowerCase()
        }

        return result
    }


    //When adding a new entry to history
    useEffect(() => {
        const parsedResult = parseLastHistoryAndAnswerToString(history[history.length - 1], answer)
        if (parsedResult.historyString !== '' && parsedResult.answerString !== '') {
            if (parsedResult.historyString === parsedResult.answerString) {
                setCorrectClassName('correct')
                //TODO Implement saving correct answers to STORE
            } else {
                setCorrectClassName('incorrect')
                //TODO Implement saving incorrect answers to STORE
            }
        }
    }, [answer, history])


    //After each click "CHECK",
    // 1) save result at History at store
    // 2) get correct answer
    const clickCheckBtn = () => {
        if (historyWords.length > 0) {
            setHistoryToStore(historyWords)
        } else if (words) {
            setHistoryToStore(words)
        };
        if(answer.length === 0){
            fetchHorizontalAnswer()
        }
    }


    //After each update of the word array, save it to the local state
    const updatedArray = (result: Word[]) => {
        setHistoryWords(result)
    }


    // Processing errors and loading
    if (error) return <div>{error}</div>


    return (
        <div>
            {
                words &&
                <>
                    <QuestionTitle number={questionNumber} title={title} />
                    <HorizontalDragAndDrop
                        correctClassName={correctClassName}
                        updatedArray={updatedArray}
                        words={words}
                    />
                </>
            }
            <CheckQuestion clickCheckBtn={clickCheckBtn} answer={answer} history={history}/>

        </div>
    );
};

export default Horizontal;

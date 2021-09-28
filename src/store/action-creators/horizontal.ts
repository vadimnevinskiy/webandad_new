import {Dispatch} from "redux";
import {HorizontalActions, HorizontalQuestion, Word} from "../../types/horizontalQuestion";
import axios from "axios";


//Get question from server and save it to store
export const fetchHorizontalQuestion = () => {
    return async (dispatch: Dispatch<HorizontalActions>) => {
        try {
            const response = await axios.get(`data/horizontal.json`)
            dispatch({type: HorizontalQuestion.FETCH_HORIZONTAL_QUESTION_SUCCESS, payload: response.data.question})
        } catch (error) {
            dispatch({type: HorizontalQuestion.FETCH_HORIZONTAL_QUESTION_ERROR, payload: 'Ошибка загрузки!'})
        }
    }
}

//Save answers history to store
export const setHistoryToStore = (result: Word[]) => {
    return async (dispatch: Dispatch<HorizontalActions>) => {
        dispatch({type: HorizontalQuestion.SET_HISTORY_ANSWERS, payload: result})
    }
}

//Get correct answer from server and save it to store
export const fetchHorizontalAnswer = () => {
    return async (dispatch: Dispatch<HorizontalActions>) => {
        try {
            const response = await axios.get(`data/horizontal.json`)
            dispatch({type: HorizontalQuestion.FETCH_HORIZONTAL_ANSWER_SUCCESS, payload: response.data.answer})
        } catch (error) {
            dispatch({type: HorizontalQuestion.FETCH_HORIZONTAL_QUESTION_ERROR, payload: 'Loading error!'})
        }
    }
}

export enum HorizontalQuestion {
    FETCH_HORIZONTAL = "FETCH_HORIZONTAL",
    FETCH_HORIZONTAL_QUESTION_SUCCESS = "FETCH_HORIZONTAL_QUESTION_SUCCESS",
    FETCH_HORIZONTAL_QUESTION_ERROR = "FETCH_HORIZONTAL_QUESTION_ERROR",
    FETCH_HORIZONTAL_ANSWER_SUCCESS = "FETCH_HORIZONTAL_ANSWER_SUCCESS",
    SET_HISTORY_ANSWERS = "SET_HISTORY_ANSWERS"
}

export interface Word {
    id: number
    value: string
}
export interface Question {
    words: Word[] | null
    questionNumber: number | null
    title: string | null
}
export interface HorizontalState {
    question: Question
    history: Array<Word[]>
    answer: Word[]
    error: string | null
}

interface FetchHorizontalQuestion {
    type: HorizontalQuestion.FETCH_HORIZONTAL
}
interface FetchHorizontalQuestionSuccess {
    type: HorizontalQuestion.FETCH_HORIZONTAL_QUESTION_SUCCESS,
    payload: Question
}
interface FetchHorizontalQuestionError {
    type: HorizontalQuestion.FETCH_HORIZONTAL_QUESTION_ERROR,
    payload: string
}
interface FetchHorizontalAnswer {
    type: HorizontalQuestion.FETCH_HORIZONTAL_ANSWER_SUCCESS,
    payload: Word[]
}
interface SetHistoryAnswers {
    type: HorizontalQuestion.SET_HISTORY_ANSWERS,
    payload: Word[]
}

export type HorizontalActions = FetchHorizontalQuestion
    | FetchHorizontalQuestionSuccess
    | FetchHorizontalQuestionError
    | FetchHorizontalAnswer
    | SetHistoryAnswers

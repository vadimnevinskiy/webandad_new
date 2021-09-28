import {combineReducers} from "redux";
import {horizontalReducer} from "./horizontalReducer";

export const rootReducer = combineReducers({
    horizontal: horizontalReducer
})

export type RootState = ReturnType<typeof rootReducer>

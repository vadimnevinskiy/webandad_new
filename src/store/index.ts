import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";


// export const store = createStore(rootReducer, applyMiddleware(thunk))



// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
export const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(thunk)
))



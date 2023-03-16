import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//logger allows us to see what state looks before action is dispatched, what is the action and then what is the state after the action is dispatched.
import { rootReducer } from "./root-reducer";

//a middleware is something that will run when a action is dispatched but before it hits the reducers.
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

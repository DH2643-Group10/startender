/*
What goes in this file? Everything related to the Databae reducer. 

Reducers are functions that take the current state and an action as arguments, and return a new 
state result. In other words, (state, action) => newState. The databaeReducer contains the pure
functions relating to the database.


Read more: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

*/

import {DataBaeDispatchTypes, DATABASE_LOADING, DATABASE_FAIL, DATABASE_SUCCESS, SET_CURRENT_USER, CREATE_USER, LOG_OUT_USER} from "../actions/DatabaeActionTypes"
import isEmpty from "../components/util/checkEmpty";
import { UserInput } from "../actions/DatabaeActionTypes";

interface DefaultStateI {
    loading?: boolean,
    token?: string,
    error?: object,
    createSuccessful?: boolean,
    // currentUser?: {},
    currentUser?: any,  // --> What type should it have? 
    // currentUser?: UserInput,
    isAuthenticated?: boolean,
}

const defaultState: DefaultStateI = {
    loading: false,
    isAuthenticated: false,
};

const databaeReducer = (state: DefaultStateI = defaultState, action: DataBaeDispatchTypes): DefaultStateI => {
    switch(action.type) {

        case DATABASE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case DATABASE_LOADING:
            return {
                loading: true,
            }
        case DATABASE_SUCCESS: 
            return {
                loading: false,
                token: action.payload,
            }

        case CREATE_USER: 
            return {
                // loading: false,
                createSuccessful: action.payload,
            }
        case SET_CURRENT_USER: 
            return {
                isAuthenticated: !isEmpty(action.payload),
                currentUser: action.payload,
            }
        
        case LOG_OUT_USER:
            return {
                //isAuthenticated: false,
                //currentUser: {}
                //isAuthenticated: isEmpty(action.payload)
                isAuthenticated: !isEmpty(action.payload)
            }
            
        default:
            return state
    }
}

export default databaeReducer;

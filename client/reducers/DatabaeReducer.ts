/*
What goes in this file? Everything related to the Databae reducer. 

Reducers are functions that take the current state and an action as arguments, and return a new 
state result. In other words, (state, action) => newState. The databaeReducer contains the pure
functions relating to the database.


Read more: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

*/

import {DataBaeDispatchTypes,DATABASE_LOADING, DATABASE_FAIL, DATABASE_SUCCESS, SET_CURRENT_USER} from "../actions/DatabaeActionTypes"


interface DefaultStateI {
    loading: boolean,
    token?: String,

}

const defaultState: DefaultStateI = {
    loading: false
};

const databaeReducer = (state: DefaultStateI = defaultState, action: DataBaeDispatchTypes): DefaultStateI => {
    switch(action.type) {
        case DATABASE_FAIL:
            return {
                loading: false,
            }
        case DATABASE_LOADING:
            return {
                loading: true,
            }
        case DATABASE_SUCCESS: 
            return {
                loading: false,
                token: action.payload
            }
        default:
            return state
    }
}

export default databaeReducer;
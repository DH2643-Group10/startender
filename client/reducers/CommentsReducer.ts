/*
What goes in this file? Everything related to the Databae reducer. 

Reducers are functions that take the current state and an action as arguments, and return a new 
state result. In other words, (state, action) => newState. The databaeReducer contains the pure
functions relating to the database.

Read more: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

*/

import { 
    CommentsDispatchTypes, 
    CommentsTypes,
    COMMENTS_SUCCESS, 
    COMMENTS_LOADING, 
    COMMENTS_FAIL } from "../actions/CommentsActionTypes";

interface DefaultStateI {
    commentsLoading: boolean,
    comments?: CommentsTypes,
    commentsError?: string

}

const defaultState: DefaultStateI = {
    commentsLoading: false,
    commentsError:''

};

const commentsReducer = (state: DefaultStateI = defaultState, action: CommentsDispatchTypes): DefaultStateI => {
    switch(action.type) {
        case COMMENTS_FAIL:
            return {
                commentsLoading: false,
                commentsError: action.payload
            }
        case COMMENTS_LOADING:
            return {
                commentsLoading: true,
            }
        case COMMENTS_SUCCESS: 
            return {
                commentsLoading: false,
                comments: action.payload
            }
        default:
            return state
    }
    
}

export default commentsReducer;
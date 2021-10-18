/*
What goes in this file? Actions!
Actions: Actions are a plain JavaScript object that contains information. Actions are the only 
source of information for the store. Actions have a type field that tells what kind of action 
to perform and all other fields contain information or data. And there is one other term called 
Action Creators, these are the function that creates actions. So actions are the information 
(Objects) and action creator are functions that return these actions.

https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#designing-actions
*/

import {Dispatch} from "redux";
import { CommentsDispatchTypes, 
    COMMENTS_FAIL, 
    COMMENTS_LOADING, 
    COMMENTS_SUCCESS,
    CommentType } from "./CommentsActionTypes";
import axios from "axios";

export const GetAllComments = (drinkId: string) => async (dispatch: Dispatch<CommentsDispatchTypes>) => {
    /*  /comments/${drinkId}
    
    */
    try {
        dispatch( {
            type: COMMENTS_LOADING
            
        })

        // Här gör vi själva API callet till CocktailDB.
        axios.get(`http://localhost:4000/comments/${drinkId}`).then(response=>{
            if(response.status==200){
                const {comments} = response.data

                dispatch({
                    type: COMMENTS_SUCCESS,
                    payload: comments
                })
            }
        })
   
       

      } catch (error) {
          dispatch({
              type: COMMENTS_FAIL
          })
      }

};
export const CreateComment = (comment: CommentType) => async (dispatch: Dispatch<CommentsDispatchTypes>) => {
    // comments/create
    try {
        dispatch({
            type: COMMENTS_LOADING})

        axios.post(`http://localhost:4000/comments/create`, comment).then(response=>{
            if(response.status==200){
                dispatch({
                    type:COMMENTS_SUCCESS})
            }
        })
    }
    catch (error) {
        dispatch({
            type: COMMENTS_FAIL,
            error:error
        })
    }
}
    
export const DeleteComment = (commentId: string) => async (dispatch: Dispatch<CommentsDispatchTypes>) => {
    // comments/create
    try {
        dispatch({
            type: COMMENTS_LOADING})

        axios.post(`http://localhost:4000/delete/create`, commentId).then(response=>{
            if(response.status==200){
                dispatch({
                    type:COMMENTS_SUCCESS})
            }
        })
    }
    catch (error) {
        dispatch({
            type: COMMENTS_FAIL,
            error:error
        })
    }
}
export const GetAllCommentsFromUser = (userId: string) => async (dispatch: Dispatch<CommentsDispatchTypes>) => {
    /*  /comments/${drinkId}
    
    */
    try {
        dispatch( {
            type: COMMENTS_LOADING 
        })

        // Här gör vi själva API callet till CocktailDB.
        axios.get(`http://localhost:4000/users/${userId}`).then(response=>{
            if(response.status==200){
                const {comments} = response.data

                dispatch({
                    type: COMMENTS_SUCCESS,
                    payload: comments
                })
            }
        })
   
       

      } catch (error) {
          dispatch({
              type: COMMENTS_FAIL,
              payload: error
          })
      }

};
    

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
    CommentType, 
    CREATED_COMMENT,
    DELETE_COMMENT} from "./CommentsActionTypes";
import axios from "axios";

export const GetAllComments = (cocktailDBId: string) => async (dispatch: Dispatch<CommentsDispatchTypes>) => {
    /*  /comments/${drinkId}
    
    */
    try {
        dispatch( {
            type: COMMENTS_LOADING
            
        })

        // Här gör vi själva API callet till CocktailDB.
        // axios.get(`http://localhost:4000/comments/find/${cocktailDBId}`,{params:{id:cocktailDBId}}).then(response=>{
        axios.get(`http://localhost:4000/comments/${cocktailDBId}`).then(response=>{
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
export const CreateComment = (comment:CommentType) => async (dispatch: Dispatch<CommentsDispatchTypes>, getState) => {
    // comments/create
    try {
        dispatch({
            type: COMMENTS_LOADING})

        await axios.post(`http://localhost:4000/comments/create`, comment).then(response=>{
            if(response.status==200){

                dispatch({
                    type: CREATED_COMMENT,
                    payload: response.data
                })
            }
        })
    }
    catch (error) {
        dispatch({
            type: COMMENTS_FAIL,
            error:error
        })
    }
};
    
export const DeleteComment = (commentId: string) => async (dispatch: Dispatch<CommentsDispatchTypes>) => {
    // comments/create
    try {
        dispatch({
            type: COMMENTS_LOADING})

        await axios.delete(`http://localhost:4000/comments/delete/${commentId}`).then(response=>{
            if(response.status==200){
                const {statusMessage} = response.data

                dispatch({
                    type:DELETE_COMMENT,
                    payload:statusMessage })
            }
            }).catch((error)=>{
                console.log("error",error)
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
        axios.get(`http://localhost:4000/comments/usercomments/${userId}`).then(response=>{
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
    

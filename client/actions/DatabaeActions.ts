/*
What goes in this file? Actions!
Actions: Actions are a plain JavaScript object that contains information. Actions are the only 
source of information for the store. Actions have a type field that tells what kind of action 
to perform and all other fields contain information or data. And there is one other term called 
Action Creators, these are the function that creates actions. So actions are the information 
(Objects) and action creator are functions that return these actions.

https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#designing-actions
*/
import axios from "axios";
import {DataBaeDispatchTypes, FIND_USER_SUCCESS, DATABASE_LOADING, DATABASE_FAIL, DATABASE_SUCCESS, SET_CURRENT_USER, UserInput, CREATE_USER, LOG_OUT_USER, LOGIN_ERROR_MESSAGE, SIGNUP_ERROR_MESSAGE} from "./DatabaeActionTypes"
import { CocktailType } from "./CocktailActionTypes";
import {Dispatch} from "redux";

import setAuthToken from "../components/util/setAuthToken";
import jwt_decode from 'jwt-decode';

export const Login = (userInput : UserInput |any) => async (dispatch: Dispatch<DataBaeDispatchTypes>) => {
    // Här vill vi hantera allt snack med databasen. 
    // precis på samma sätt som vi snackar med Cocktail DB i den andra reducern.
    // så try { fetch from database } funktionen här inne! 

            try {
                dispatch( {
                    type: DATABASE_LOADING
                    
                })

            axios.post('http://localhost:4000/login/', userInput)
            .then(response => {
                // console.log("login response@ DatabaeActions.ts", response)

                if (response.status==200){
                   const {token} = response.data

                    dispatch({type: DATABASE_SUCCESS,})

                    // setAuthToken(token)
                    //function that sets HTTP headers

                    const decodedFromToken= jwt_decode(token)
                    // console.log("decodedFromToken",decodedFromToken)
                    //decodes the token
                    dispatch({
                        type: SET_CURRENT_USER,
                        payload: decodedFromToken},
                        )
                }
                if(response.status==201){
                    //user does not exist
                    // console.log("error 201:", response)
                    const {errorMessage} = response.data
                    dispatch(
                        {
                            type: LOGIN_ERROR_MESSAGE,
                            payload: errorMessage
                        })
                }
                if(response.status==202){
                    //"Wrong Username or Password!"
                    // console.log("error 201:", response)
                    const {errorMessage} = response.data
                    dispatch(
                        {
                            type: LOGIN_ERROR_MESSAGE,
                            payload: errorMessage
                        })
                }


                // console.log("response", response)
            })
            
  
    
}  catch(error)
    { dispatch( {
        type: DATABASE_FAIL,
        payload:error
        
    })
        
    // console.log("catch error in DatabaeActions.ts: ", error)
}

}

export const SignUp = (userInput : UserInput |any) => async (dispatch: Dispatch<DataBaeDispatchTypes>) => {
 
    try {
        dispatch( {
            type: DATABASE_LOADING
            
        })
    await axios.post('http://localhost:4000/users/add',userInput).then(response => {

            if(response.status==200){
                dispatch({
                        type: CREATE_USER,
                        payload: true
                    })
            }

                //error statuses from backend
            if(response.status==201){
                // console.log("error 201:", response)
                const {errorMessage} = response.data
                dispatch(
                    {
                        type: SIGNUP_ERROR_MESSAGE,
                        payload: errorMessage
                    })
            }

        //    console.log("response Data", response)
        }).catch(error=>{
            console.log("Error :", error)

             dispatch( {
                type: CREATE_USER,
                payload:false
            })

        })

    
}  catch(error){
     dispatch( 
         {
        type: CREATE_USER,
        payload:false,
        // payload: error.error
    })
        
    // console.log("catch error in DatabaeActions.ts: ", error)
}
}

export const FetchUserDataWithId = (userId : string) => async (dispatch: Dispatch<DataBaeDispatchTypes>) => {
    try {
        dispatch( {
            type: DATABASE_LOADING
            
        })

        // Här gör vi själva API callet till CocktailDB.
        // axios.get(`http://localhost:4000/comments/find/${cocktailDBId}`,{params:{id:cocktailDBId}}).then(response=>{
        axios.get(`http://localhost:4000/users/${userId}`).then(response=>{
            if(response.status==200){
                const {user} = response.data

                dispatch({
                    type: FIND_USER_SUCCESS,
                    payload: user
                })
            }
        })
   
      } catch (error) {
          dispatch({
              type: DATABASE_FAIL
          })
      }

};

export const AddToFavourites = (userInput : UserInput|any, cocktailObject : CocktailType) => async (dispatch: Dispatch<DataBaeDispatchTypes>) => {
    try {
        dispatch( {
            type: DATABASE_LOADING
        })
      
        // Här gör vi själva API callet till CocktailDB.
        // axios.get(`http://localhost:4000/comments/find/${cocktailDBId}`,{params:{id:cocktailDBId}}).then(response=>{
        
        //for displaying Favourite drinks, name and image on myPage
        userInput.updateId = cocktailObject.idDrink
        userInput.cocktailName = cocktailObject.strDrink
        userInput.cocktailImgUrl = cocktailObject.strDrinkThumb

        
        await axios.post(`http://localhost:4000/users/favourites/add`, userInput).then(response=>{
            // console.log("userInput databaeactions,",userInput)
            if(response.status==200){
                //response is the updated user
               
                const {user} = response.data
                // console.log("user response favourites add", user)

                //database returns "_id" property, we use "id" in client, therefore we rename it here.

                user.id = user._id
                delete user._id 

                dispatch({
                    type: SET_CURRENT_USER,
                    payload: user
                })
            }
        })
   
      } catch (error) {
          dispatch({
              type: DATABASE_FAIL
          })
      }

};

export const RemoveFromFavourites = (userInput : UserInput|any, cocktailObject : CocktailType) => async (dispatch: Dispatch<DataBaeDispatchTypes>) => {
    try {
        dispatch( {
            type: DATABASE_LOADING
        })

        // userInput.updateId = updateId


        userInput.updateId = cocktailObject.idDrink
        userInput.cocktailName = cocktailObject.strDrink
        userInput.cocktailImgUrl = cocktailObject.strDrinkThumb
        
        await axios.post(`http://localhost:4000/users/favourites/remove`, userInput).then(response=>{
            // console.log("userInput databaeactions,",userInput)
            if(response.status==200){
               //response is the updated user
                const {user} = response.data

                // console.log("user response favourites remove", user)

                //database returns "_id" property, we use "id" in client, therefore we rename it here.
                user.id = user._id
                delete user._id 

                dispatch({
                    type: SET_CURRENT_USER,
                    payload: user
                })
            }
        })
   
      } catch (error) {
          dispatch({
              type: DATABASE_FAIL
          })
      }

};



export const Logout = () => async (dispatch: Dispatch<DataBaeDispatchTypes>) => {
    // want to dispatch username etc to empty string or null
    // if there is a login true also set this to false 
    dispatch(
        {
        type: LOG_OUT_USER,
        payload: false
    });
}

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
import {DataBaeDispatchTypes,DATABASE_LOADING, DATABASE_FAIL, DATABASE_SUCCESS, SET_CURRENT_USER, UserInput} from "./DatabaeActionTypes"

import {Dispatch} from "redux";



export const Login = (userInput : UserInput) => async (dispatch: Dispatch<DataBaeDispatchTypes>) => {
    // Här vill vi hantera allt snack med databasen. 
    // precis på samma sätt som vi snackar med Cocktail DB i den andra reducern.
    // så try { fetch from database } funktionen här inne! 
   
        //authorization
        // var userInput = {
        //     username:username,
        //     password:password,
        //     token:""
        //     }
            // console.log("userInput",userInput)
            try {
                dispatch( {
                    type: DATABASE_LOADING
                    
                })

            axios.post('http://localhost:4000/login/', userInput)
            .then(response => {
                console.log("login response", response.data)
                if (response.status==200){
                    dispatch(
                        {
                            type: DATABASE_SUCCESS,
                            payload: response.data.token
                        }
                    )
                // setToken(response.data.token)
                    // setToken()
                    // verify()

                    //lös logik i frontend??
                    // setUsername("")
                    // setPassword("")
                    // setIsLoggedIn(true)
                }
                // console.log("response", response)
            })
  
    
}  catch(error)
    { dispatch( {
        type: DATABASE_FAIL
        
    })
        
    console.log("catch error in DatabaeActions.ts: ", error)}

}
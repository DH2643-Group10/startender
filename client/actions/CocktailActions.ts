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
import { CocktailDispatchTypes, COCKTAILS_FAIL, COCKTAILS_LOADING, COCKTAILS_SUCCESS } from "./CocktailActionTypes";
import axios from "axios";

export const GetFromCocktailDB = (requestUrl: string) => async (dispatch: Dispatch<CocktailDispatchTypes>) => {
    
    try {
        dispatch( {
            type: COCKTAILS_LOADING
            
        })

        // Här gör vi själva API callet till CocktailDB.
        // var response = await axios.get(requestUrl,{headers : 
        //   {"Access-Control-Allow-Origin": "*"}
        // })

        var response = await axios.get(requestUrl)
        
        console.log("response GetFromCocktailDB",response);
        if(response.status==200){
          dispatch({
            type: COCKTAILS_SUCCESS,
            payload: response.data
        })

        } else {console.log("response not status 200", response)}

      } catch (err) {
          dispatch({
              type: COCKTAILS_FAIL
          })
      }

};

/*
    Tidigare koden, som jag utgått ifrån:

      const fetchData = async (requestUrl: string) => {
        setIsLoading(true);
        setIsError(false);
        
        try {
          const response = await fetch(requestUrl);
          if (response.ok) {
            const data = await response.json();
            console.log("data withFetch",data)
            setIsLoading(false);
            setData(data);
          } else {
            throw new Error("Fetch request error");
          }
        } catch (err) {
          setIsLoading(false);
          setIsError(err);
        }
      };
*/
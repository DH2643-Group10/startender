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

export const GetFromDatabae = () => async (dispatch: Dispatch) => {
    // Här vill vi hantera allt snack med databasen. 
    // precis på samma sätt som vi snackar med Cocktail DB i den andra reducern.
    // så try { fetch from database } funktionen här inne! 
};


/*
What goes in this file? Everything related to the Databae reducer. 

Reducers are functions that take the current state and an action as arguments, and return a new 
state result. In other words, (state, action) => newState. The databaeReducer contains the pure
functions relating to the database.

Read more: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

*/

import { CocktailDispatchTypes, CocktailsType, CocktailType, COCKTAILS_SUCCESS, COCKTAILS_LOADING, COCKTAILS_FAIL,} from "../actions/CocktailActionTypes";

interface DefaultStateI {
    loading: boolean,
    cocktail?: CocktailsType,
}

const defaultState: DefaultStateI = {
    loading: false,
};

const cocktailReducer = (state: DefaultStateI = defaultState, action: CocktailDispatchTypes): DefaultStateI => {
    switch(action.type) {
        case COCKTAILS_FAIL:
            return {

                loading: false,
            }
        case COCKTAILS_LOADING:
            return {
                ...state,

                loading: true,
            }
        case COCKTAILS_SUCCESS: 
            return {
                loading: false,
                cocktail: action.payload
            }
    
        default:
            return state
    }
    
}

export default cocktailReducer;
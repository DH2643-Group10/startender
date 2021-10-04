import { combineReducers } from "redux";
import databaeReducer from "./DatabaeReducer";
import cocktailReducer from "./CocktailReducer";

/*
What goes in this file? Just the root reducer, it combines the databae reducer and the Cocktail reducer.

Reducers are functions that take the current state and an action as arguments, and return a new 
state result. In other words, (state, action) => newState.

If we compare it to actions, actions only tell WHAT to do, but they don’t tell how to do, 
so reducers are the pure functions that take the current state and action and return the new 
state and tell the store how to do. Since we have 2 API's we can create one reducer for each API,
to keep things nice and tidy. But they are combined here in the RootRecuder.

Read more: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

*/

const RootReducer = combineReducers({
    // Combines the two reducers, one for the Database API and one for the Cocktail DB API:
    databae: databaeReducer,
    cocktails: cocktailReducer

});

export default RootReducer
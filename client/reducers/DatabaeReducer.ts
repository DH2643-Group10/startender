/*
What goes in this file? Everything related to the Databae reducer. 

Reducers are functions that take the current state and an action as arguments, and return a new 
state result. In other words, (state, action) => newState. The databaeReducer contains the pure
functions relating to the database.

Read more: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

*/

interface DefaultStateI {

}

const defaultState: DefaultStateI = {

};

const databaeReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {
    // TODO. Här ska alla asyncrona funktioner som rör Databasen ligga.
    // Fetch dvs.
    return state
}

export default databaeReducer;
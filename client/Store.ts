/*
What goes in this file? Everything related to the Redux store.

What is the store? The store is the object which holds the state of the application.
Our store brings together the state, actions, and reducers that makes up our app. 

Read more: https://redux.js.org/tutorials/fundamentals/part-4-store
*/

import {applyMiddleware, createStore} from "redux";
import RootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>

export default Store;
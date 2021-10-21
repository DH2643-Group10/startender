//Data fetches
export const DATABASE_LOADING = "DATABASE_LOADING";
export const DATABASE_FAIL = "DATABASE_FAIL";
export const DATABASE_SUCCESS = "DATABASE_SUCCESS";

//Create users
export const CREATE_USER = "CREATE_USER";
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOG_OUT_USER = "LOG_OUT_USER";
export const FIND_USER_SUCCESS = "FIND_USER_SUCCESS";

//Signup user messages
export const ERROR_MESSAGE = "ERROR_MESSAGE";

interface ErrorMessage {
    type: typeof ERROR_MESSAGE;
    payload?:{}
}

interface DatabaseLoading {
    type: typeof DATABASE_LOADING;
}

interface DatabaseFail {
    type: typeof DATABASE_FAIL;
    payload?:{}
}

interface SetCurrentUser {
    type:typeof SET_CURRENT_USER
    payload?:{}
}

interface DatabaseSuccess {
    type: typeof DATABASE_SUCCESS;
    payload?: string
};

interface CreateUser {
    type: typeof CREATE_USER;
    payload:boolean|any;
};
interface FindUserSuccess{
    type: typeof FIND_USER_SUCCESS,
    payload?:{}
}

interface LogOutUser {
    type: typeof LOG_OUT_USER;
    payload?: {}
}

export interface UserInput {
    name?:String,
    username: String,
    password: String,
    email?: String,
    token?: string,
    }

// export interface UserInput {
//     username: String,
//     password: String,
//     token: String,
//     }

export type DataBaeDispatchTypes = DatabaseLoading | DatabaseFail | DatabaseSuccess | SetCurrentUser | CreateUser | LogOutUser | FindUserSuccess | ErrorMessage;

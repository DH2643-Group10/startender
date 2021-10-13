export const DATABASE_LOADING = "DATABASE_LOADING";
export const DATABASE_FAIL = "DATABASE_FAIL";
export const DATABASE_SUCCESS = "DATABASE_SUCCESS";
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

interface DatabaseLoading {
    type: typeof DATABASE_LOADING;
}

interface DatabaseFail {
    type: typeof DATABASE_FAIL;
}

interface DatabaseSuccess {
    type: typeof DATABASE_SUCCESS;
    payload?: String
};

interface SetCurrentUser {
    type:typeof SET_CURRENT_USER
    payload?:{}
}

export interface UserInput {
    username: String,
    password: String,
    token: String,
    }

export type DataBaeDispatchTypes = DatabaseLoading | DatabaseFail | DatabaseSuccess | SetCurrentUser;
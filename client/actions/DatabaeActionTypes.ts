export const DATABASE_LOADING = "DATABASE_LOADING";
export const DATABASE_FAIL = "DATABASE_FAIL";
export const DATABASE_SUCCESS = "DATABASE_SUCCESS";

interface DatabaseLoarding {
    type: typeof DATABASE_LOADING;
}

interface DatabaseFail {
    type: typeof DATABASE_FAIL;
}

interface DatabaseSuccess {
    type: typeof DATABASE_SUCCESS;
    payload: {}
};
// Here are all the types that belongs to the Cocktail DB API.

export const COMMENTS_LOADING = "COMMENTS_LOADING";
export const COMMENTS_FAIL = "COMMENTS_FAIL";
export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS";
export const DELETE_COMMENT = "DELTE_COMMENT";
export const CREATED_COMMENT = "CREATED_COMMENT";


// This type corresponds to the JSON object returned from the Cocktail DB API.
export type CommentsTypes = {
    comments?: CommentType[];
};

export type CommentType = {
    // We can add more stuff here in the future, to extract more data from the API.
    cocktailDBId:string
    userId: string
    drinkId?: string
    comment: string
    date?:  string
    username: string
    strDrink?: string
    strDrinkThumb?: string
}

export interface CommentsLoading {
    type: typeof COMMENTS_LOADING
}

export interface DeleteComment {
    type: typeof DELETE_COMMENT
    payload?: string
}


export interface CreatedComment {
    type: typeof CREATED_COMMENT
    payload?: CommentType
}

export interface CommentsFail {
    type: typeof COMMENTS_FAIL
    payload?: string
}

export interface CommentsSuccess {
    type: typeof COMMENTS_SUCCESS
    payload?: CommentType[] 
    
        // The API returns an object that contains an array of drink objects.
};

export type CommentsDispatchTypes = CommentsLoading | CommentsFail | CommentsSuccess | DeleteComment | CreatedComment ;
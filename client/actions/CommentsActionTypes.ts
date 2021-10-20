// Here are all the types that belongs to the Cocktail DB API.

export const COMMENTS_LOADING = "COMMENTS_LOADING";
export const COMMENTS_FAIL = "COMMENTS_FAIL";
export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS";

// This type corresponds to the JSON object returned from the Cocktail DB API.
export type CommentsTypes = {
    comments: CommentType[];
};

export type CommentType = {
    // We can add more stuff here in the future, to extract more data from the API.
    cocktailDBId:string
    userId: string
    drinkId: string
    comment: string
    date?:  string
   
}


export interface CommentsLoading {
    type: typeof COMMENTS_LOADING
}

export interface CommentsFail {
    type: typeof COMMENTS_FAIL
    payload?: string
}

export interface CommentsSuccess {
    type: typeof COMMENTS_SUCCESS
    payload?: CommentsTypes 
    
        // The API returns an object that contains an array of drink objects.
};

export type CommentsDispatchTypes = CommentsLoading | CommentsFail | CommentsSuccess;
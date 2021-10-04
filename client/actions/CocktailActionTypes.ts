// Here are all the types that belongs to the Cocktail DB API.

export const COCKTAILS_LOADING = "COCKTAILS_LOADING";
export const COCKTAILS_FAIL = "COCKTAILS_FAIL";
export const COCKTAILS_SUCCESS = "COCKTAILS_SUCCESS";

// This type corresponds to the JSON object returned from the Cocktail DB API.
export type CocktailsType = {
    drinks: CocktailType[];
};

export type CocktailType = {
    // We can add more stuff here in the future, to extract more data from the API.
    idDrink?: string
    strDrink?: string
    strImageSource?: string
}

export interface CocktailsLoading {
    type: typeof COCKTAILS_LOADING;
}

export interface CocktailsFail {
    type: typeof COCKTAILS_FAIL;
}

export interface CocktailsSuccess {
    type: typeof COCKTAILS_SUCCESS;
    payload: 
        // The API returns an object that contains an array of drink objects.
        CocktailsType
};

export type CocktailDispatchTypes = CocktailsLoading | CocktailsFail | CocktailsSuccess;
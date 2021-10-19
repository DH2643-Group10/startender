import {
    DARK_THEME,LIGHT_THEME
} from "./ThemeActionTypes";
export const ToggleDarkTheme = () => ({
    type: DARK_THEME,
});
export const ToggleLightTheme = () => ({
    type: LIGHT_THEME,
});

export const ToggleTheme = (theme) => {
    return async (dispatch) => {
        if (theme === true) {
            dispatch(ToggleDarkTheme())
        } else {
            dispatch(ToggleLightTheme())
        }

    }
}

export const darkTheme = () => {
    return async (dispatch) => {
        dispatch(ToggleDarkTheme())
    }
}
import {
    DARK_THEME,LIGHT_THEME
} from "../actions/ThemeActionTypes";

const initialState = {
    darkMode: false
};

export default (darkMode = initialState, { type }) => {
    switch (type) {
        case DARK_THEME:
            return { darkMode: true };
        case LIGHT_THEME:
            return { darkMode: false };
        default:
            return darkMode;
    }
};
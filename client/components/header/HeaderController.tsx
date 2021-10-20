import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import HeaderView from "./HeaderView";
import * as themeActions from "../../actions/ThemeActions";

// component meant to handle logic for header


const HeaderController = () => {
    // Toggle light or dark mode with global store variable

    const themeState = useSelector((state: RootStore) => state.themeReducer);
    const [darkMode, setDarkMode] = useState<boolean>(themeState.darkMode);


    const dispatch = useDispatch();
    const handleThemeChange = () => {
        dispatch(themeActions.ToggleTheme(!darkMode));
        setDarkMode(!darkMode)
    };

    const handleDarkMode = { 
        handleThemeChange: handleThemeChange
      }

    return (
        <div>
            <HeaderView {...handleDarkMode}/>
        </div>
    )
}

export default HeaderController;

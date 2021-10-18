import React from 'react';
import HeaderView from "./HeaderView";

// component meant to handle logic for header

const HeaderController = (props) => {
    // Toggle light or dark mode with global store variable

    return (
        <div>
            <HeaderView {...props}/>
        </div>
    )
}

export default HeaderController;

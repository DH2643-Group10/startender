import React from "react";
import ButtonView from "./ButtonView";

const ButtonController = () => {

    const handleClick = () => {
        console.log("Clicked")
    }

    return (
        <div>
            <ButtonView onClick={handleClick}>My button</ButtonView> 
        </div>

    );
}

export default ButtonController;

import React, { FC, ReactNode } from "react";
import './styles.scss';

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode
}

const ButtonView: FC<ButtonProps> = ({onClick, children}) => {

    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>

    );
}

export default ButtonView; 

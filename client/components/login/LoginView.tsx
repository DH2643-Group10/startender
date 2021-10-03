import React from 'react'
import Input from '../input/Input'


//view meant to render login window, input fields and register new users
const LoginView = ({...props}) => {
    const {signing, handleToggle} = props;
    return (
        <div>
            Hello login here :-)
            <Input placeHolder={'Email'} type={'text'}/>
            <Input placeHolder={'Password'} type={'password'}/>
            <button onClick={props.login}>Login</button>
            
        </div>
    )
}

export default LoginView

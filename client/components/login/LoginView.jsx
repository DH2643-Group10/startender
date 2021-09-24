import React from 'react'
import Input from '../input'
const LoginView = ({...props}) => {
    return (
        <div>
            Hello login here :-)
            <Input placeHolder={'Email'} type={'text'}/>
            <Input placeHolder={'Password'} type={'password'}/>
            <button>Create New</button>
            <button onClick={props.login}>Login</button>
        </div>
    )
}

export default LoginView

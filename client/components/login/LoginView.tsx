import React from 'react'
import Input from '../input/Input'


//view meant to render login window, input fields and register new users
const LoginView = ({...props}) => {
    const {login,signing, handleToggle,setPassword,setUsername,username,password} = props;
    console.log("loginView username",username)

    return (
        <div>
            Hello login here :-)
            <Input placeHolder={'Username'} type={'text'} value={username} onChange={setUsername}/>
            <Input placeHolder={'Password'} type={'password'} value={password} onChange={setPassword}/>
            <button onClick={login}>Login</button>
            
        </div>
    )
}

export default LoginView

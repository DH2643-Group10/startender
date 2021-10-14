import React from 'react'
import Input from '../input/Input'


//view meant to render login window, input fields and register new users
const LoginView = ({...props}) => {
    const {login,signing, handleToggle,setPassword,setUsername,username,password} = props;
    // console.log("loginView username",username)

    return (
        <div>
            Hello login here :-)
            <Input placeholder={'Username'} type={'text'} value={username} onChange={setUsername}/>
            <Input placeholder={'Password'} type={'password'} value={password} onChange={setPassword}/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LoginView

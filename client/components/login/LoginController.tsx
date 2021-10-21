import axios from "axios"
import React,{useEffect, useState} from "react"
import LoginView from "./loginView"
import SignupView from './SignupView'
import Profile from './Profile'
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../Store";
import { Login, SignUp } from '../../actions/DatabaeActions';
import {UserInput} from '../../actions/DatabaeActionTypes';
import './styles.scss';
import ButtonView from "../button/ButtonView"
import { Col, Row } from "react-bootstrap"

//component meant to render login box and handle authorization

const LoginController = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signingUp, setSigningUp] = useState(false)

    const handleToggle = () =>{
        setSigningUp(!signingUp)
    }
 

    var newUser : UserInput = {username:username, password:password, token:'', }
    

    const dispatch = useDispatch();

    const handleLogin = () => dispatch(Login(newUser));
    const handleSignUp = (user) => dispatch(SignUp(user));

    const databaeRootState = useSelector((state: RootStore) => state.databae);
    // console.log("databaeRootState", databaeRootState)
    useEffect(()=>{
        databaeRootState.createSuccessful &&
        setSigningUp(false)
     
    },[
        databaeRootState.createSuccessful
    ])
    return (
        <Col className="loginSignout">
            {
            !databaeRootState.isAuthenticated && 
            <> 
                {!signingUp &&
                <LoginView  login={handleLogin} handleToggle={handleToggle} username={username} password={password} setPassword={(e) => setPassword(e.target.value)} setUsername={e => setUsername(e.target.value)}/>
                }   
                <SignupView successful={databaeRootState.createSuccessful} signingUp={signingUp} handleToggle={handleToggle} signUp={handleSignUp}/> 
            </> 
            }
           
        </Col>
    )
}

export default LoginController

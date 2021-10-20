import axios from "axios"
import React,{useEffect, useState} from "react"
import LoginView from "./loginView"
import SignupView from './SignupView'
import Profile from './Profile'
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../Store";
import { Login, SignUp } from '../../actions/DatabaeActions';
import {UserInput} from '../../actions/DatabaeActionTypes';



//component meant to render login box and handle authorization

const LoginController = () => {
    const [token, setToken] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [signingUp, setSigningUp] = useState(false)

    // console.log("username",username)
    // console.log("password",password)
    const handleToggle = () =>{
        setSigningUp(!signingUp)
    }

 
    // const onSubmit = (event,form) =>{
    //     // console.log("on submit event:",event)
    //     event.preventDefault()

    //    try {axios.post('http://localhost:4000/users/add',form).then(response => {
    //     console.log("http://localhost:4000/users/add response:", response)
    //     // console.log("response Data", response.data)
    //     // console.log("response Data usernamne", response.data.username)

    //        if(response.status==200){

    //         setClear(true)
    //         setSigningUp(false)
    //        } 
    //     //    console.log("response Data", response)
    //    }).catch(error=>{
    //        console.log("Error :", error)
    //    })}
    //    catch(error){
    //        console.log("catch onSubmit",error)
    //     //    error
    //    }
       
    // }

    const verify = () => {
        try{
            axios.get('http://localhost:4000/login/verify',{
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
            .then(response => {
                console.log("verify response", response)
                // setToken(res)
                if (response.status==200){
                    setIsLoggedIn(true)
                }
                // console.log("response", response)
            }).catch(error=>{
                console.log("verify error:",error)
            })
        
        }
    
        catch(error){
            console.log("error",error)
            }
        }   

    // const posts = () => {
    //     console.log("posts token", token)
    //     try{
    //         axios.get('http://localhost:4000/login/posts',{
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //             })
    //         .then(response => {
    //             console.log("posts response", response)
    //             // setToken(res)
    //             if (response.status==200){
    //                 setIsLoggedIn(true)
    //             }
    //             // console.log("response", response)
    //         }).catch(error=>{
    //             console.log("posts error:",error)
    //         })
        
    //     }
    
    //     catch(error){
    //         console.log("error",error)
    //         }
    //     }   
   
    // const login = () => {
    //     //authorization
    //     var userInput = {
    //         username:username,
    //         password:password,
    //         token:""
    //         }
    //         // console.log("userInput",userInput)
        
    //         axios.post('http://localhost:4000/login/', userInput)
    //         .then(response => {
    //             console.log("login response", response.data)
    //             if (response.status==200){
    //             setToken(response.data.token)
    //                 // setToken()
    //                 // verify()
    //                 setUsername("")
    //                 setPassword("")
    //                 setIsLoggedIn(true)
    //             }
    //             // console.log("response", response)
    //         })
    //         .catch((error)=>{
    //         console.log("error",error)
    //         })
    //     }

    var newUser : UserInput = {username:username, password:password, token:'', }
    

    const dispatch = useDispatch();

    const handleLogin = () => dispatch(Login(newUser));
    const handleSignUp = (user) => dispatch(SignUp(user));

    const databaeRootState = useSelector((state: RootStore) => state.databae);
    console.log("databaeRootState", databaeRootState)
    useEffect(()=>{
        databaeRootState.createSuccessful &&
        setSigningUp(false)
     
    },[
        databaeRootState.createSuccessful
    ])
    return (
        <div>{
        !databaeRootState.isAuthenticated
        ? <> 
        {!signingUp &&
        <LoginView  login={handleLogin} username={username} password={password} setPassword={(e) => setPassword(e.target.value)} setUsername={e => setUsername(e.target.value)}/>
        }   
        <SignupView successful={databaeRootState.createSuccessful} signingUp={signingUp} handleToggle={handleToggle} signUp={handleSignUp}/> 
        </> : <Profile/>
        }
           
        </div>
    )
}

export default LoginController

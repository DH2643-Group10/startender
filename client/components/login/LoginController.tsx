import axios from "axios"
import React,{useState} from "react"
import LoginView from "./loginView"
import SignupView from './SignupView'
import Profile from './Profile'
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../Store";
import { Login } from '../../actions/DatabaeActions';
import {UserInput} from '../../actions/DatabaeActionTypes';



//component meant to render login box and handle authorization

const LoginController = () => {
    const [token,setToken] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [signingUp, setSigningUp] = useState(false)
    const [signUpResponseCode,setSignUpResponseCode]=useState(0)

    // console.log("username",username)
    // console.log("password",password)
    const handleToggle = () =>{
        setSigningUp(!signingUp)
    }

    const dispatch = useDispatch();
 
    const onSubmit = (event,form) =>{
        // console.log("on submit event:",event)
        event.preventDefault()

       
       axios.post('http://localhost:4000/users/add',form).then(response => {
        // console.log("response", response)
        // console.log("response Data", response.data)
        // console.log("response Data usernamne", response.data.username)

           if(response.status==200){
            setUsername(response.data.username)

            setSignUpResponseCode(200)
            setSigningUp(false)
           }
        //    console.log("response Data", response)
       }).catch(error=>{
           console.log("Error :", error)
       })
    }

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

    const posts = () => {
        console.log("posts token", token)
        try{
            axios.get('http://localhost:4000/login/posts',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                })
            .then(response => {
                console.log("posts response", response)
                // setToken(res)
                if (response.status==200){
                    setIsLoggedIn(true)
                }
                // console.log("response", response)
            }).catch(error=>{
                console.log("posts error:",error)
            })
        
        }
    
        catch(error){
            console.log("error",error)
            }
        }   
   
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
    var newUser : UserInput = {username:username, password:password,token:''}

    const handleLogin = () => dispatch(Login(newUser));
    const databaeRootState = useSelector((state: RootStore) => state.databae);
    console.log("databaeRootState", databaeRootState)
    return (
        <div>{
        !isLoggedIn? <> 
        <LoginView  login={handleLogin} username={username} password={password} setPassword={(e) => setPassword(e.target.value)} setUsername={e => setUsername(e.target.value)}/>
        <SignupView signingUp={signingUp} handleToggle={handleToggle} onSubmit={onSubmit} responseCode={signUpResponseCode}/> 
        </> : <Profile posts={posts}/>
        }
           
        </div>
    )
}

export default LoginController

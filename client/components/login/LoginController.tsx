import axios from "axios"
import React,{useState} from "react"
import LoginView from "./loginView"
import SignupView from './SignupView'

//component meant to render login box and handle authentication

const LoginController = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signing, setSigning] = useState(false)
    
    const handleToggle = () =>{
        setSigning(!signing)
    }

    const onSubmit = (event,data) =>{
        event.preventDefault()
       axios.post('http://localhost:4000/app/signup',data).then(response => {
           console.log("response Data", response)
       })
    }
   
    const login =() => {
        //authentication
        try{
            //some API auth call
            console.log("testing to login")
        }catch(error){
            console.log("error",error)
        }
        
        console.log("test to login")
    }
    return (
        <div>
            <LoginView  login={login}/>
            <SignupView signing={signing} handleToggle={handleToggle} onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginController

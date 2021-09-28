import React,{useState} from "react"
import LoginView from "./loginView"
//component meant to render login box and handle authentication

const LoginController = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
            <LoginView login={login}/>
        </div>
    )
}

export default LoginController

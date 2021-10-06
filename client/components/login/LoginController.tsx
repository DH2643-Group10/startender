import axios from "axios"
import React,{useState} from "react"
import LoginView from "./loginView"
import SignupView from './SignupView'

//component meant to render login box and handle authorization

const LoginController = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [signingUp, setSigningUp] = useState(false)
    const [signUpResponseCode,setSignUpResponseCode]=useState(0)
    console.log("username",username)
    console.log("password",password)
    const handleToggle = () =>{
        setSigningUp(!signingUp)
    }

    // const onSubmit = (event,data) =>{
    //     event.preventDefault()
    //    axios.post('http://localhost:4000/app/signup',data).then(response => {
    //        console.log("response Data", response)
    //    })
    // }
    const onSubmit = (event,form) =>{
        // console.log("on submit event:",event)
        event.preventDefault()

       
       axios.post('http://localhost:4000/users/add',form).then(response => {
        console.log("response", response)
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
   
    const login = () => {
        //authorization
        const userInput = {
            username:username,
            password:password}
            // console.log("userInput",userInput)
        
            axios.post('http://localhost:4000/login/', userInput)
            .then(response => {
                console.log("login response", response)

                if (response.status==200){
                    
                    setUsername("")
                    setPassword("")
                    setIsLoggedIn(true)
                }
                // console.log("response", response)
            })
            .catch((error)=>{
            console.log("error",error)
            })
        }   
        
    
    return (
        <div>
            <LoginView  login={login} username={username} password={password} setPassword={(e) => setPassword(e.target.value)} setUsername={e => setUsername(e.target.value)}/>
            <SignupView signingUp={signingUp} handleToggle={handleToggle} onSubmit={onSubmit} responseCode={signUpResponseCode}/>
        </div>
    )
}

export default LoginController

import React,{useState} from 'react'
import Input from '../input/Input'
import axios from 'axios'

const SignupView = ({...props}) => {
    const {signing, handleToggle} = props
    const [fullName, setfullName] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [statusMessage, setStatusMessage] = useState("")
    
    const onSubmit = (event) =>{
        console.log("on submit event:",event)
        event.preventDefault()

        const registered = {
            fullName:fullName,
            username:username,
            email:email,
            password: password
        }
        console.log("registered:",registered)

       axios.post('http://localhost:4000/app/signup',registered).then(response => {
           if(response.status===200){
            setStatusMessage("Your account has been successfully created")

           }
           console.log("response Data", response)
       }).catch(error=>{
           console.log("Error :", error)
       })
    }
   
    
    return (
        <div>
            {signing ? 
            <form>
            <Input placeHolder={'Full name'} onChange={(e)=>{setfullName(e.target.value)}} value={fullName}/>
            <Input placeHolder={'Username'} onChange={(e)=>{setusername(e.target.value)}} value={username}/>
            <Input placeHolder={'Email'} onChange={(e)=>{setemail(e.target.value)}} value={email}/>
            <Input placeHolder={'Password'} type={'password'} onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
            <button  onClick={event=>{onSubmit(event)}}>Submit</button>
           </form>
            :
            <button onClick={handleToggle}>Register New</button>
            }
            <div>{statusMessage}</div>
            
        </div>
    )
}


export default SignupView

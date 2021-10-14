import React,{useState, useEffect} from 'react'
import Input from '../input/Input'

const SignupView = ({...props}) => {
    const {signingUp, handleToggle, responseCode, onSubmit} = props
    const [fullName, setfullName] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [statusMessage, setStatusMessage] = useState("")
    const registered = {
        fullName:fullName,
        username:username,
        email:email,
        password: password
    }
    // console.log("registered:",registered)

    useEffect(() => {
        if(responseCode===200){
            setStatusMessage("Your account has been successfully created")
            setfullName("")
            setusername("")
            setemail("")
            setpassword("")
        }
       
    }, [responseCode])

   
   
    
    return (
        <div>
            {signingUp ? 
            <div>
            <Input placeholder={'Full name'} onChange={(e)=>{setfullName(e.target.value)}} value={fullName}/>
            <Input placeholder={'Username'} onChange={(e)=>{setusername(e.target.value)}} value={username}/>
            <Input placeholder={'Email'} onChange={(e)=>{setemail(e.target.value)}} value={email}/>
            <Input placeholder={'Password'} type={'password'} onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
            <button onClick={event=>{onSubmit(event, registered)}}>Submit</button>
           </div>
            :
            <button onClick={handleToggle}>Register New</button>
            }
            <div>{statusMessage}</div>
            
        </div>
    )
}


export default SignupView

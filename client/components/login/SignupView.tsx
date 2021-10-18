import React,{useState, useEffect} from 'react'
import Input from '../input/Input'
import {UserInput} from '../../actions/DatabaeActionTypes';

const SignupView = ({...props}) => {

    
    const {successful, signingUp, handleToggle, signUp} = props
    const [name, setname] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [statusMessage,setStatusMessage]=useState("")

    var newUser : UserInput = {name:name, username:username, password:password, email:email, token:'', }

    // const registered = {
    //     name:name,
    //     username:username,
    //     email:email,
    //     password: password
    // }
    // console.log("newU:",registered)


    useEffect(() => {
        if(successful){
            setStatusMessage("Your account has been successfully created")
            setname("")
            setusername("")
            setemail("")
            setpassword("")}
    }, [successful])

   
   
    
    return (
        <div>
            {signingUp ? 
            <div>
            <Input placeholder={'Name'} onChange={(e)=>{setname(e.target.value)}} value={name}/>
            <Input placeholder={'Username'} onChange={(e)=>{setusername(e.target.value)}} value={username}/>
            <Input placeholder={'Email'} onChange={(e)=>{setemail(e.target.value)}} value={email}/>
            <Input placeholder={'Password'} type={'password'} onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
            <button onClick={()=>signUp(newUser)}>Submit</button>
           </div>
            :
            <button onClick={handleToggle}>Register New</button>
            }
            <div>{statusMessage}</div>
            
        </div>
    )
}


export default SignupView


import React,{useState, useEffect} from "react"


//component meant to render login box and handle authorization

const Profile = ({...props}) => {
    const {token,user,isLoggedIn} = props
    useEffect(()=>{
    },[])
  
    
    return (
        <div>
            Hello you are logged in 
            
        </div>
    )
}

export default Profile

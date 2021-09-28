import React,{useState} from 'react';
import CardView from "./CardView"
//component meant to handle logic for cards

const Card = () => {
const [state, setstate] = useState("")

    return (
        <div>
            <CardView text={"hello, this is a text prop"}/>            
        </div>
    )
}

export default Card

import {React, useState} from 'react';
import Card from "./CardView"
//component meant to handle logic for cards
const CardController = () => {
const [state, setstate] = useState("")

    return (
        <div>
            <Card text={"hello, this is a card lorem lorem ipsum ipsum"}/>            
        </div>
    )
}

export default CardController

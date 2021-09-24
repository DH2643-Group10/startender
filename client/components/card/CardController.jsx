import {React, useState} from 'react';
import Card from "./CardView"

const CardController = () => {
const [state, setstate] = useState(initialState)

    return (
        <div>
            <Card text={"hello, this is a card lorem lorem ipsum ipsum"}/>            
        </div>
    )
}

export default CardController

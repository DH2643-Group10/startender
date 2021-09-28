import  React,{useState} from 'react'
import Card from '../card/CardController';
//component is meant to be like a container for everything else

const HomeContainer = () => {
    const [user, setUser] = useState("")
    return (
        <div>
            <h2>Home container whats up</h2>
           <Card/>
        </div>
    )
}

export default HomeContainer

import  {React,useState} from 'react'
import Card from '../card/CardView';
//component is meant to be like a container for everything else


const HomeContainer = () => {
    const [user, setUser] = useState("")
    return (
        <div>
            <div></div>
           <Card/>
        </div>
    )
}

export default HomeContainer

import  {React,useState} from 'react'
import Card from '../card/CardView';


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

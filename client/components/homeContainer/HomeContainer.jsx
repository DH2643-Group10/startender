import  React,{useState} from 'react'
import Card from '../card/CardController';
import withFetch from '../withFetch';
//component is meant to be like a container for everything else


const HomeContainer = () => {
    const [user, setUser] = useState("")
    const UseFetch = withFetch(Card,"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
    return (
        <div>
            <h2>Home container whats up</h2>
          <UseFetch/>

        </div>
    )
}

export default HomeContainer

import  React,{useState,FC} from 'react'
import Card from '../card/CardController';
import withFetch from '../withFetch';
import Button from 'react-bootstrap/Button';

//component is meant to be like a container for everything else

const HomeContainer:FC = () => {
    const [user, setUser] = useState("")
    const UseFetch = withFetch(Card,"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
    return (
        <div>
            <h2>Home container whats up</h2>
            <UseFetch />
            <Button variant="info">
                Hello I'm a little button
            </Button>

        </div>
    )
}

export default HomeContainer

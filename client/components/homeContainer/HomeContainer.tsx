import  React,{useState,FC, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { GetFromCocktailDB } from '../../actions/CocktailActions';
import CardView from '../card/CardView';
import CardController from '../card/CardController';
import SpinnerView from '../spinner/SpinnerView';
import { RootStore } from "../../Store";
import { Spinner } from 'react-bootstrap';
import ButtonView from '../button/ButtonView';

//component is meant to be like a container for everything else
                    
const HomeContainer:FC = () => {

    const [initialPageLoading, setInitialPageLoading] = useState(true);
    const [isCardsLoading, setIsCardsLoading] = useState(true);

    const [user, setUser] = useState("")

    // Show drink:
    const dispatch = useDispatch();
    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const [cocktailName, setCocktailName] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCocktailName(event.target.value);
    const handleSubmit = () => 
        {dispatch(GetFromCocktailDB("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName));
        setIsCardsLoading(true);
        }
  
    // Show drinks on initial visit:
    useEffect(() => {
        // Searches all of API when user enters the page
        dispatch(GetFromCocktailDB("https://www.thecocktaildb.com/api/json/v1/1/search.php?s= "));
    }, []);
    
    return (
    <Container fluid id="HC" className="home">
        {
            initialPageLoading ? 
            <Row className="spinner">
                <div className="spinner--state-loading">
                    <SpinnerView setIsLoading={setInitialPageLoading}/>
                </div>
            </Row> : ''
        }
    {/* <Row>
        <LoginController/>
    </Row> */}
        <Row>
            <Col className="header"/>
        </Row>
        <Row  className="search">
            <Col>
                <InputGroup >
                    <FormControl 
                    className="search__input"
                    placeholder="Find your drink..."
                    aria-label="Find your drink..."
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    onKeyPress={(e) => {if(e.key === "Enter") handleSubmit()
                    //dispatch(GetFromCocktailDB("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName))
                    }}
                    //onKeyPress={(event) => {if(event.key === 'Enter'){handleSubmit}}}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
                        Search
                    </Button>
                </InputGroup>
            </Col>
        </Row>

        {!isCardsLoading 
        // and we have data : && data.drinks or something
        // or do we want that in the CardController / someplace else? 
        // && cocktailState 
        // ? cocktailState != null || cocktailState.cocktail != null? 
        ? cocktailState.cocktail ?
        <Row className="results">
            <CardController/>
            {console.log("cocktailState: ", cocktailState.cocktail)}
        </Row> : 
        console.log("Cannot find drinks") 
        :
        <Row className="spinner">
            <div className="spinner--state-loading">
            <SpinnerView setIsLoading={setIsCardsLoading}/>
            </div> 
        </Row>
        }
    </Container>
    )
}

export default HomeContainer

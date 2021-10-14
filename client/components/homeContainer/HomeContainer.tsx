import  React,{useState,FC, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import LoginController from '../login/LoginController';
import { useDispatch, useSelector } from 'react-redux';
import { GetFromCocktailDB } from '../../actions/CocktailActions';
import CardView from '../card/CardView';
import CardController from '../card/CardController';

//component is meant to be like a container for everything else
                    
const HomeContainer:FC = () => {
    const [user, setUser] = useState("")

    // Show drink:
    const dispatch = useDispatch();
    const [cocktailName, setCocktailName] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCocktailName(event.target.value);
    const handleSubmit = () => dispatch(GetFromCocktailDB("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName));
  
    // Show drinks on initial visit:
    useEffect(() => {
        // Searches all of API when user enters the page
        dispatch(GetFromCocktailDB("https://www.thecocktaildb.com/api/json/v1/1/search.php?s= "));
    }, []);

    return (
        <Container fluid>
            <Row>
                <LoginController/>
            </Row>
            <Row>
                <Col className="top-bar">
                    <img src="https://i.imgur.com/6wA0XlN.png"></img>
                    {/* TODO: ändra så filen importeras från lokalt istället /assets/imgs/title.png */}
                </Col>
            </Row>
            <Row  className="search-bar">
                <Col>
                     <InputGroup>
                        <FormControl
                        placeholder="Find your drink..."
                        aria-label="Find your drink..."
                        aria-describedby="basic-addon2"
                        onChange={handleChange}
                        onKeyPress={(e) => {if(e.key === "Enter") dispatch(GetFromCocktailDB("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName))}}
                        //onKeyPress={(event) => {if(event.key === 'Enter'){handleSubmit}}}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
                        Search
                        </Button>
                    </InputGroup>
                    </Col>
            </Row>
            <Row className="bottom-bar">
                <CardController/>
            </Row>

        </Container>
    )
}

export default HomeContainer

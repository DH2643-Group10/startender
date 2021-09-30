import  React,{useState,FC} from 'react'
import Card from '../card/CardController';
import withFetch from '../withFetch';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';




//component is meant to be like a container for everything else

const HomeContainer:FC = () => {
    const [user, setUser] = useState("")
    const UseFetch = withFetch(Card,"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
    return (
        <Container fluid>
            <Row>
                <Col className="top-bar">
                    <img src="https://i.imgur.com/6wA0XlN.png"></img>
                    {/* TODO: ändra så filen importeras från lokalt istället /assets/imgs/title.png */}
                </Col>
            </Row>
            <Row>
                <Col className="bottom-bar">
                     <InputGroup>
                        <FormControl
                        placeholder="Find your drink..."
                        aria-label="Find your drink..."
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>

                    {/* <UseFetch /> */}
                    <Button variant="info">
                        Hello I'm a little button
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeContainer

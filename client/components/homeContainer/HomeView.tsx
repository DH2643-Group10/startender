import React, { FC, SetStateAction, useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Dispatch } from "redux";
import { CocktailType } from "../../actions/CocktailActionTypes";
import { GetFromCocktailDB } from '../../actions/CocktailActions';
import SpinnerView from "../spinner/SpinnerView";
import CardController from "../card/CardController";

interface Props {
    handleSubmit: () => void,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    isCardsLoading: boolean,
    setIsCardsLoading: React.Dispatch<React.SetStateAction<boolean>>
}


const HomeView: FC<Props> = ({...props}) => {

    const [initialPageLoading, setInitialPageLoading] = useState(true);

    // Show drink:
    const cocktailState = useSelector((state: RootStore) => state.cocktails);

        
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
                        onChange={props.handleChange}
                        onKeyPress={(e) => {if(e.key === "Enter") props.handleSubmit()
                        }}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={props.handleSubmit}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>

            {!props.isCardsLoading 
            // and we have data : && data.drinks or something
            // or do we want that in the CardController / someplace else? 
            // && cocktailState 
            // ? cocktailState != null || cocktailState.cocktail != null? 
            ? cocktailState.cocktail ?
            <Row className="results">
                <CardController/>
                {/* {console.log("cocktailState: ", cocktailState.cocktail)} */}
            </Row> : 
            ''
            :
            <Row className="spinner">
                <div className="spinner--state-loading">
                <SpinnerView setIsLoading={props.setIsCardsLoading}/>
                </div> 
            </Row>
            }
        </Container>
    )
}

export default HomeView
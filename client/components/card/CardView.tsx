import React, { FC, SetStateAction, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { Col, Row } from "react-bootstrap";
import CardModal from "./CardModal";
import { Dispatch } from "redux";
import { CocktailType } from "../../actions/CocktailActionTypes";

//component meant to display to display drink cards and perhaps other things aswell
interface Props {
    imgUrl?: string,
    title?: string,
    text?: string
}

const CardView: FC<Props> = () => {

    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const [show, setShow] = useState<boolean>(false);
    const [drinkToShow, setDrinkToShow] = useState<CocktailType>(undefined);

    const handleClose = () => setShow(false);
    const handleShow = (drink: CocktailType) => {
        setDrinkToShow(drink);
        setShow(true);
    };

    return (
        <Row>
            { cocktailState == null || cocktailState.cocktail == null || cocktailState.cocktail.drinks == null ?
                <Row className="text--search--noMatch">Sorry! Can't find any drinks...</Row>
                     :
                cocktailState.cocktail.drinks?.map((drink, index) => (
                    <Col xs={12} sm={4} md={3} lg={2} key={drink.idDrink}>
                        <Card>
                            <Card.Img variant="top" src={drink.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{drink.strDrink}</Card.Title>
                                <Card.Text className="card__text">
                                {drink.strInstructions}
                                </Card.Text>
                                <div className="button__container">
                                    <Button variant="secondary" className="card__button" onClick={() => handleShow(drink)}>Read more</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
            ))}
            <Row>
            <Col>
            <CardModal
                show = {show}
                onHide={handleClose}
                drinktoshow = {drinkToShow}
                />
            </Col>
            </Row>
        </Row>
    )
}

export default CardView

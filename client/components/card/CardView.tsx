import React, { FC } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";

//component meant to display to display drink cards and perhaps other things aswell

interface Props {
    imgUrl?: string,
    title?: string,
    text?: string
}

const CardView: FC<Props> = () => {

    const cocktailState = useSelector((state: RootStore) => state.cocktails);

    return (
        <div>
            { cocktailState !== undefined && cocktailState.cocktail !== undefined ?
                cocktailState.cocktail.drinks.map(drink => (
                <Card>
                    <Card.Img variant="top"  src={drink.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{drink.strDrink}</Card.Title>
                        <Card.Text>
                        {drink.idDrink}
                        </Card.Text>
                        <Button variant="secondary">Read more</Button>
                    </Card.Body>
                </Card>
            )) : ""}
        </div>
    )
}

export default CardView

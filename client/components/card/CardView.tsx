import React, { FC } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//component meant to display to display drink cards and perhaps other things aswell

interface Props {
    imgUrl?: string,
    title: string,
    text: string
}

const CardView: FC<Props> = ({imgUrl,title,text}) => {
    return (
        <Card>
            <Card.Img variant="top"  src={ imgUrl ? imgUrl : "https://alladrinkar.se/wp-content/uploads/2021/06/sex-on-the-beach-drink-500x375.png"} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {text ? text : 'lorem lorem ipsum' }
                </Card.Text>
                <Button variant="secondary">Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default CardView

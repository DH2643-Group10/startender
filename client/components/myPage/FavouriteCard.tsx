import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetFromCocktailDB } from "../../actions/CocktailActions";
import { CocktailType } from "../../actions/CocktailActionTypes";
import { GetAllCommentsFromUser } from "../../actions/CommentsActions";
import { RootStore } from "../../Store";
import ButtonView from "../button/ButtonView";
import CardModal from "../card/CardModal";
import LoginController from '../login/LoginController';
import SpinnerView from "../spinner/SpinnerView";
import './styles.scss';

//

interface Props {
    handleLogOut: () => void,
    handleClose: () => void,
    handleShow: (id: string) => void,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    areCommentsLoading: boolean,
    setAreCommentsLoading: React.Dispatch<React.SetStateAction<boolean>>
    areFavLoading: boolean,
    setAreFavLoading: React.Dispatch<React.SetStateAction<boolean>>,
    favId: string,

}

const FavouriteCard: FC<Props> = ({...props}) => {
    // const userState = useSelector((state: RootStore) => state.databae);
    // const commentState = useSelector((state: RootStore) => state.commentsReducer);
    // const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const {favId, handleShow} =props
    
    const [drinkToShow, setDrinkToShow] = useState<CocktailType>(undefined);


    // useEffect(() => {
    //     cocktailState?.cocktail?.drinks.length === 1 ? (setDrinkToShow(cocktailState?.cocktail?.drinks[0]), props.setShow(true)) :  '';
    //     console.log('useeffect: ', cocktailState);
        
    // }, [cocktailState?.cocktail?.drinks]);

    return (
    <Col xs={12} sm={4} md={3} lg={2} key={favId}>
        <Card>
            <Card.Body>
                <Card.Title>Drink {favId}</Card.Title>                                        
                <div className="button__container">
                    <Button variant="secondary" className="card__button" onClick={() => props.handleShow(favId)}>Show drink</Button>
                </div>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default FavouriteCard;

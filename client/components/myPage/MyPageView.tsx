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
import './styles.scss';

//component meant to display to display information about the logged in user
interface Props {
    handleClick: () => void,
    handleClose: () => void,
    handleShow: (id: string) => void,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>

}

const MyPageView: FC<Props> = ({...props}) => {
    const userState = useSelector((state: RootStore) => state.databae);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);
    const cocktailState = useSelector((state: RootStore) => state.cocktails);

    const [drinkToShow, setDrinkToShow] = useState<CocktailType>(undefined);

    console.log('cocktailstate: ', cocktailState);


    useEffect(() => {
        cocktailState?.cocktail?.drinks.length === 1 ? (setDrinkToShow(cocktailState?.cocktail?.drinks[0]), props.setShow(true)) :  '';
        console.log('useeffect: ', cocktailState);
    }, [cocktailState?.cocktail?.drinks]);

    return (
        <Container fluid className="mypage">
            <h2 className="mypage__header">My Page</h2>
            {!userState.isAuthenticated ?
                <LoginController/>
            :
            <Row>
                 <div className="mypage__button--logOut">
                    <ButtonView onClick={props.handleClick}>Log out</ButtonView>
                </div>
                <Col>
                    <h3>My account details</h3>
                    <div className="mypage__details">
                        <div className="mypage__details--bold">
                            Name:
                        </div>
                        {userState.currentUser ? userState.currentUser.name : ''}<br/>
                        <div className="mypage__details--bold">
                            Username
                        </div>
                        {userState.currentUser ? userState.currentUser.username : ''}<br/>
                        <div className="mypage__details--bold">
                            Email:
                        </div>
                        {userState.currentUser ? userState.currentUser.email : ''}<br/>
                    </div>
                    {/* display favourites */}
                     {userState.currentUser.favourites instanceof Array ? 
                    <Row>
                        <h3>My favourite drinks</h3>
                        {userState.currentUser.favourites.map((favId, index) => (
                            <Col>
                                <Card key={favId}>
                                    <Card.Body>
                                        <Card.Title>Drink {favId}</Card.Title>                                        
                                        <div className="button__container">
                                            <Button variant="secondary" className="card__button" onClick={() => props.handleShow(favId)}>Show drink</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                     : ''
                }

                    {!props.show ?                 
                    (    commentState.comments instanceof Array ? 
                        <Row>
                            <h3>My comments</h3> 
                            {commentState.comments.map((comment, index) => (
                                <Col xs={12} sm={4} md={3} lg={2} >
                                    <Card key={index}>
                                        <Card.Body>
                                            <Card.Title>Drink {comment.cocktailDBId}</Card.Title>
                                            <Card.Subtitle>{comment.comment}</Card.Subtitle>
                                            <div className="button__container">
                                                <Button variant="secondary" className="card__button" onClick={() => props.handleShow(comment.cocktailDBId)}>Show drink</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                     : '') 
                     : 
                     <CardModal
                     show = {props.show}
                     onHide={props.handleClose}
                     drinktoshow = {drinkToShow}
                     />
                }
                </Col>
            </Row>
            }
        </Container>
    )
}

export default MyPageView;

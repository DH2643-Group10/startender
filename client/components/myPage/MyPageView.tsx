import React, { FC, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetFromCocktailDB } from "../../actions/CocktailActions";
import { CocktailType } from "../../actions/CocktailActionTypes";
import { GetAllComments, GetAllCommentsFromUser } from "../../actions/CommentsActions";
import { FetchUserDataWithId, Logout } from "../../actions/DatabaeActions";
import { UserInput } from "../../actions/DatabaeActionTypes";
import { RootStore } from "../../Store";
import ButtonController from "../button/ButtonController";
import ButtonView from "../button/ButtonView";
import CardModal from "../card/CardModal";
import LoginController from '../login/LoginController';
import './styles.scss';

//component meant to display to display information about the logged in user
interface Props {
    handleClick: () => void,
}

const MyPageView: FC<Props> = ({...props}) => {
    const userState = useSelector((state: RootStore) => state.databae);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);
    console.log("userState in myprofile",userState)
    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const dispatch = useDispatch();

    const [show, setShow] = useState<boolean>(false);
    const [drinkToShow, setDrinkToShow] = useState<CocktailType>(undefined);

    console.log('userstate: ', userState);
    console.log('commentstate: ', commentState);
    console.log('cocktailstate: ', cocktailState);

    const handleClose = () => {
        dispatch(GetAllCommentsFromUser(userState?.currentUser?.id));
        setShow(false);
    };

    const handleShow = (id: string) => {
        dispatch(GetFromCocktailDB("https://thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id));

        // setDrinkToShow(cocktailState?.cocktail?.drinks[0]);
        // setShow(true);
    };

    //TODO: Fix this so comments doesn't disappear 
    useEffect(() => {
        cocktailState?.cocktail?.drinks.length === 1 ? (setDrinkToShow(cocktailState?.cocktail?.drinks[0]), setShow(true)) : '';
        console.log('useeffect: ', cocktailState)

    }, [cocktailState?.cocktail?.drinks]);

    return (
        <Container fluid className="mypage">
            <h2 className="mypage__header">My Page</h2>
            {!userState.isAuthenticated ?
            // <Row>
                <LoginController/>
            // </Row>
            :
            <Row>
                 <div className="mypage__button--logOut">
                    <ButtonView onClick={props.handleClick}>Log out</ButtonView>
                    {/* <ButtonController /> */}
                </div>
                <Col>
                    <Row>Name: {userState.currentUser ? userState.currentUser.name : ''} </Row>
                    <Row>Username: {userState.currentUser ? userState.currentUser.username : ''} </Row>
                    <Row>Email: {userState.currentUser ? userState.currentUser.email : ''} </Row>
                   
                    {/* display favourites */}
                     {userState.currentUser.favourites instanceof Array ? 
                    <Row>
                        My favourite drinks: 
                        {userState.currentUser.favourites.map((favId, index) => (
                            // dispatch(GetFromCocktailDB("https://thecocktaildb.com/api/json/v1/1/lookup.php?i=" + comment.cocktailDBId)) 
                            //  drinkIdArray.push(comment.cocktailDBId) && 
                            <Row key={favId}>
                                <Col>Favourite Drinkid: {favId}</Col>
                                {/* <Col>Drinkname: {cocktailState?.cocktail?.drinks[0].strDrink}</Col> */}
                            </Row>
                        ))}
                    </Row>
                     : ''
                }

                    {!show ?                 
                    (    commentState.comments instanceof Array ? 
                        <Row>
                            My comments: 
                            {commentState.comments.map((comment, index) => (
                                <Row key={index}>
                                    <Col>Drinkid: {comment.cocktailDBId}</Col>
                                    <Col>Comment: {comment.comment} </Col>
                                    {/* <Col>Drinkname: {cocktailState?.cocktail?.drinks[0]?.strDrink}</Col> */}
                                    <div className="button__container">
                                        <Button variant="secondary" className="card__button" onClick={() => handleShow(comment.cocktailDBId)}>Read more</Button>
                                    </div>
                                    {/* { show &&
                                    <CardModal
                                        show = {show}
                                        onHide={handleClose}
                                        // drinktoshow = {cocktailState?.cocktail?.drinks[0]}
                                        drinktoshow = {drinkToShow}
                                        />
                                    }  */}
                                </Row>
                            ))}
                        </Row>
                     : '') : 
                     <CardModal
                     show = {show}
                     onHide={handleClose}
                     // drinktoshow = {cocktailState?.cocktail?.drinks[0]}
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

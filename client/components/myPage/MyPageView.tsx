import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetFromCocktailDB } from "../../actions/CocktailActions";
import { GetAllComments, GetAllCommentsFromUser } from "../../actions/CommentsActions";
import { FetchUserDataWithId, Logout } from "../../actions/DatabaeActions";
import { UserInput } from "../../actions/DatabaeActionTypes";
import { RootStore } from "../../Store";
import ButtonController from "../button/ButtonController";
import ButtonView from "../button/ButtonView";
import LoginController from '../login/LoginController';
import './styles.scss';

//component meant to display to display information about the logged in user

const MyPageView: FC = () => {
    const userState = useSelector((state: RootStore) => state.databae);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);
    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(Logout());
    }

    useEffect(() => {
        dispatch(GetAllCommentsFromUser(userState?.currentUser?.id));
    }, [userState?.currentUser?.id])

    // const cocktailId = '15997';

    // useEffect(() => {
    //     dispatch(GetFromCocktailDB("https://thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailId));
    // }, []);

    return (
        <Container fluid>
            <h2 className="header--myPage">My Page</h2>
            {!userState.isAuthenticated ?
            <Row>
                <LoginController/>
            </Row>
            :
            <Row>
                 <div className="button--myPage-logOut">
                    <ButtonView onClick={handleClick}>Log out</ButtonView>
                    {/* <ButtonController /> */}
                </div>
                <Col>
                    <Row>Name: {userState.currentUser ? userState.currentUser.name : ''} </Row>
                    <Row>Username: {userState.currentUser ? userState.currentUser.username : ''} </Row>
                    <Row>Email: {userState.currentUser ? userState.currentUser.email : ''} </Row>

                    {commentState.comments instanceof Array ? 
                    <Row>
                        My comments: 
                        {commentState.comments.map((comment, index) => (
                            // dispatch(GetFromCocktailDB("https://thecocktaildb.com/api/json/v1/1/lookup.php?i=" + comment.cocktailDBId)) 
                            //  drinkIdArray.push(comment.cocktailDBId) && 
                            <Row key={index}>
                                <Col>Drinkid: {comment.cocktailDBId}</Col>
                                <Col>Comment: {comment.comment} </Col>
                                {/* <Col>Drinkname: {cocktailState?.cocktail?.drinks[0].strDrink}</Col> */}
                            </Row>
                        ))}
                    </Row>
                     : ''
                }
                </Col>
            </Row>
            }
        </Container>
    )
}

export default MyPageView;

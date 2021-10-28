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
interface Props {
    handleClick: () => void,
}


const MyPageView: FC<Props> = ({...props}) => {
    const userState = useSelector((state: RootStore) => state.databae);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);

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

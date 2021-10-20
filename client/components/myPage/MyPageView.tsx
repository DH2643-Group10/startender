import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../actions/DatabaeActions";
import { UserInput } from "../../actions/DatabaeActionTypes";
import { RootStore } from "../../Store";
import ButtonController from "../button/ButtonController";
import ButtonView from "../button/ButtonView";
import LoginController from '../login/LoginController';
import './styles.scss';

//component meant to display to display information about the logged in user

const MyPageView: FC = () => {
    const userState = useSelector((state: RootStore) => state.databae);
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("userState.isAuthenticated BEFORE: ", userState.isAuthenticated)
        dispatch(Logout());
        console.log("userState.isAuthenticated AFTER: ", userState.isAuthenticated)
        console.log("userstate: ", userState)
    }

    useEffect(() => {
        console.log("userState: ", userState)
    }, [userState.isAuthenticated]) 

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
                {/* TODO: In future add info about the logged in user. Access with redux, with useSelect 
                (Like we have done in the CardView component) */}
                {
                    userState.currentUser ? console.log(userState.currentUser.email) : ''
                }
                    <Row>
                        Name: {userState.currentUser ? userState.currentUser.name : ''} 
                    </Row>
                    <Row>
                        Username: {userState.currentUser ? userState.currentUser.username : ''} 
                    </Row>
                    <Row>
                        Email: {userState.currentUser ? userState.currentUser.email : ''} 
                    </Row>
                    {/* Probably don't wanna show token in frontend in future, just wanted to show how to access the redux store :-) */}
                    {/* My token: {userState.token?? ''} */}
                    My favorite drinks:
                    My comments:
                </Col>
            </Row>
            }
        </Container>
    )
}

export default MyPageView;

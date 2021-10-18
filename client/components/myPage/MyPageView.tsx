import React, { FC, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import ButtonController from "../button/ButtonController";
import ButtonView from "../button/ButtonView";
import LoginController from '../login/LoginController';
import './styles.scss';

//component meant to display to display information about the logged in user

const MyPageView: FC = () => {
    const userState = useSelector((state: RootStore) => state.databae);

    const [loggedIn, setLoggedIn] = useState(true); // do with redux

    const handleClick = () => {
        console.log("clicked");
        setLoggedIn(false);
    }

    return (
        <Container fluid>
            <h2 className="header--myPage">My Page</h2>
            {!loggedIn ? 
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
                    
                    Name: username
                    {/* Probably don't wanna show token in frontend in future, just wanted to show how to access the redux store :-) */}
                    My token: {userState.token?? ''}
                    My favorite drinks:
                    My comments:
                </Col>
            </Row>
            }
        </Container>
    )
}

export default MyPageView;

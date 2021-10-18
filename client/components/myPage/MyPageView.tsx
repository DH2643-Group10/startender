import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import LoginController from '../login/LoginController';

//component meant to display to display information about the logged in user

const MyPageView: FC = () => {
    const userState = useSelector((state: RootStore) => state.databae);

    const loggedIn = true; // do with redux

    return (
        <Container fluid>
            <h2>My Page</h2>
            {!loggedIn ? 
            <Row>
                <LoginController/>
            </Row>
            :
            <Row>
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

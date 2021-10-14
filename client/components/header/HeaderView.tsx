import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'


//component meant to display the header

const HeaderView: FC = () => {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Link to="/">Home</Link>
                </Col>
                <Col>
                    <Link to="/my-page">My page</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderView;


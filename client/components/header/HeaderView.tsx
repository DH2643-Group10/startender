import React, { FC } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './styles.scss';


//component meant to display the header

const HeaderView: FC = () => {

    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
            <Container fluid>
                <Navbar.Brand>Startender</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Link to="/">Home</Link>
                    <Link to="/my-page">My page</Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
    )
}

export default HeaderView;


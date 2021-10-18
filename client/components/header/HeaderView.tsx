import React, { FC } from "react";
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
library.add(faMoon, faSun);
import {Link} from 'react-router-dom'
import './styles.scss';


//component meant to display the header

const HeaderView = (props) => {

    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
            <Container fluid>
                <Navbar.Brand>Startender</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <NavItem className="theme-toggle header-link"onClick={props.handleThemeChange}>
                        <FontAwesomeIcon icon={props.darkMode ? 'sun' : 'moon'}/>
                    </NavItem>
                    <Link to="/">Home</Link>
                    <Link to="/my-page">My page</Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
    )
}

export default HeaderView;


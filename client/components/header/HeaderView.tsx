import React, { FC, useState } from "react";
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faMoon, faSun, faStar);
import {Link} from 'react-router-dom'
import './styles.scss';
import { useDispatch,useSelector } from "react-redux";
import { RootStore } from "../../Store";

//component meant to display the header
interface Props {
    handleThemeChange: () => void;
}

const HeaderView: FC<Props> = ({...props}) => {
    const themeState = useSelector((state: RootStore) => state.themeReducer);

    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
            <Container fluid>
                <Navbar.Brand>                
                    <Link className="navbar__link" to="/">
                        <FontAwesomeIcon className="navbar__icon" icon="star"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <NavItem className="theme-toggle header-link" onClick={props.handleThemeChange}>
                        <FontAwesomeIcon className="navbar__icon--clickable" icon={themeState.darkMode ? 'sun' : 'moon'}/>
                    </NavItem>
                    <NavItem>
                        <Link className="navbar__link" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="navbar__link" to="/my-page">My page</Link>
                    </NavItem>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
    )
}

export default HeaderView;


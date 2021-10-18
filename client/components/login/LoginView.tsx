import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ButtonView from '../button/ButtonView';
import Input from '../input/Input'


//view meant to render login window, input fields and register new users
const LoginView = ({...props}) => {
    const {login,signing, handleToggle,setPassword,setUsername,username,password} = props;
    // console.log("loginView username",username)

    return (
        <Container fluid>
            <Row>
            Hello login here :-) 
            </Row>
            <Row>
                <Col>
                    <Input placeholder={'Username'} type={'text'} value={username} onChange={setUsername}/>
                </Col>
                <Col>
                    <Input placeholder={'Password'} type={'password'} value={password} onChange={setPassword}/>
                </Col>
                <Col>
                    <ButtonView onClick={login}>Login</ButtonView>
                </Col>
            </Row>
        </Container>


        // <div>
        //     <Input placeholder={'Username'} type={'text'} value={username} onChange={setUsername}/>
        //     <Input placeholder={'Password'} type={'password'} value={password} onChange={setPassword}/>
        //     <button onClick={login}>Login</button>
        //     {/* <ButtonView onClick={login}>Login</ButtonView> */}
        // </div>
    )
}

export default LoginView

import React,{Dispatch, FC, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { DataBaeDispatchTypes } from '../../actions/DatabaeActionTypes';
import ButtonView from '../button/ButtonView';
import Input from '../input/Input'

//render prop
const ErrorContainer = (props) => {
    const {message} = props
return(
<div>
    {message()}
</div>)
}

interface Props {
    userErrorMessage: string,
    login: any,
    handleToggle: () => void,
    username: string,
    password: string,
    setPassword: (e: any) => void,
    setUsername: (e: any) => void
}


//view meant to render login window, input fields and register new users
const LoginView: FC<Props> = ({...props}) => {
    const {login, handleToggle,setPassword,setUsername,username,password,userErrorMessage} = props;

    return (
        
            <Col className="login" sm={12} md={6} lg={4}>
                <h3 className="login__header">Login to enter your page</h3>
                
                <Row>
                    <Input className="login__input" placeholder={'Username'} type={'text'} value={username} onChange={setUsername}/>
                </Row>
                <Row>
                    <Input className="login__input" placeholder={'Password'} type={'password'} value={password} onChange={setPassword}/>
                </Row>
                <Row className="login__input"> 
                    <ButtonView onClick={login}>Login</ButtonView>
                    {userErrorMessage && <ErrorContainer message= { () => <h3>{userErrorMessage}</h3> }/>}
                </Row>
            </Col>
    )
}

export default LoginView

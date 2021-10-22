import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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

//view meant to render login window, input fields and register new users
const LoginView = ({...props}) => {
    const {login,signing, handleToggle,setPassword,setUsername,username,password,userErrorMessage} = props;
    // console.log("loginView username",username)
    // const [statusMessage, setStatusMessage] = useState("")

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


        // <div>
        //     <Input placeholder={'Username'} type={'text'} value={username} onChange={setUsername}/>
        //     <Input placeholder={'Password'} type={'password'} value={password} onChange={setPassword}/>
        //     <button onClick={login}>Login</button>
        //     {/* <ButtonView onClick={login}>Login</ButtonView> */}
        // </div>
    )
}

export default LoginView

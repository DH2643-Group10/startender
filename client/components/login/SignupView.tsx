import Button from '@restart/ui/esm/Button'
import React,{useState, useEffect, FC} from 'react'
import ButtonView from '../button/ButtonView'
import Input from '../input/Input'
import { Col, Container, Row } from 'react-bootstrap';
import { UserInput } from '../../actions/DatabaeActionTypes';
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../Store";

//render prop
const ErrorContainer = (props) => {
        const {message} = props
    return(
    <div>
        {message()}
    </div>)
}

interface Props {
    successful: boolean,
    signingUp: boolean,
    handleToggle: () => void,
    signUp: any,
}

const SignupView: FC<Props> = ({...props}) => {
    const {successful, signingUp, handleToggle, signUp} = props
    const [name, setname] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [statusMessage, setStatusMessage] = useState("")

    var newUser : UserInput = {name:name, username:username, password:password, email:email, token:'', favourites:[] }

    const databaeRootState = useSelector((state: RootStore) => state.databae);
    const signupErrorMessage = databaeRootState.signupErrorMessage

    useEffect(()=>{
        databaeRootState.signupErrorMessage&&
        setStatusMessage(databaeRootState.signupErrorMessage)
    },[databaeRootState.signupErrorMessage])
    
    
    useEffect(() => {
        if(successful){
            setStatusMessage("Your account has been successfully created")
            setname("")
            setusername("")
            setemail("")
            setpassword("")}
    }, [successful])

    return (
        // <Col className="login" sm={12} md={6} lg={4}>
            signingUp ? 
            <Col className="login" sm={12} md={6} lg={4}>
                <h3 className="login__header">Sign up as a new user</h3>
                <Row>
                    <Input className="login__input" placeholder={'Name'} onChange={(e)=>{setname(e.target.value)}} value={name}/>
                </Row>
                <Row>
                    <Input className="login__input" placeholder={'Username'} onChange={(e)=>{setusername(e.target.value)}} value={username}/>
                </Row>

                {signupErrorMessage && <ErrorContainer message= { () => <h3>{statusMessage}</h3> }/>}
                
                <Row>
                    <Input className="login__input" placeholder={'Email'} onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                </Row>
                <Row>
                    <Input className="login__input" placeholder={'Password'} type={'password'} onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
                </Row>
                <Row className="login__input">
                    <ButtonView onClick={() =>signUp(newUser)}>Create account</ButtonView>
                    <ButtonView onClick={handleToggle}>Back to login</ButtonView>

                </Row>
                {/* <Row className="login__input">
                </Row> */}
            </Col>
            : <Row><ButtonView onClick={handleToggle}>Register New</ButtonView></Row>
            
            /* <div>{statusMessage}</div>
        </Col> */
    )
}

export default SignupView;

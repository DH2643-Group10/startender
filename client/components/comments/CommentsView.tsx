import React, {useState} from 'react';
import { Collapse } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SpinnerView from '../spinner/SpinnerView';


const Comments = ({comments}) => {

    //maybe move this one to the controller, because if a comment 
    // is added we want the new one to be rendered as well
    const [iscommentsLoading, setcommentsLoading] = useState(true);


    return (
        // !iscommentsLoading? 
        //     comments?
            //här loopar vi över all kommentarer och skapar en col i row (lägg till nyast sist?):
            <Row>
            <Col className="comment__text">
                <div className="comment__text--title">userName wrote:</div>
                <div className="comment__text--comment">HÄR ÄR EN TEXT</div>
            </Col>
            <Col className="comment__text">
            <div className="comment__text--title">userName2 wrote:</div>
            <div className="comment__text--comment">HÄR ÄR EN ANNAN RIKTIGT RIKTIGT RIIIIIIIIIIIIIIIIIIIIIIIIIIIIIKTIGT LÅNG TEXT</div>
        </Col>
            <Col className="comment__text">
            <div className="comment__text--title">userName2 wrote:</div>
            <div className="comment__text--comment">HÄR ÄR EN ANNAN TEXT</div>
        </Col>
        </Row>
        //     :
        //     <div>There are no comments on this drink, your comment can be the first!</div>
        // :
        // <Row className="spinner">
        //     <div className="spinner--state-loading">
        //     <SpinnerView setIsLoading={setcommentsLoading}/>
        //     </div> 
        // </Row>       
    )
    
}

export default Comments
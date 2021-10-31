import React, {useEffect, useState} from 'react';
import { Collapse } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SpinnerView from '../spinner/SpinnerView';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';

const Comments = () => {

    const [iscommentsLoading, setcommentsLoading] = useState(true);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);
    const [allComments,setComments] = useState([])

    return (
        // !iscommentsLoading? 
        //     comments?
            //här loopar vi över all kommentarer och skapar en col i row (lägg till nyast sist?):
            <Row>
                {/* TODO: Update comment.userId to be username instead */}
              
                {commentState.comments instanceof Array ? 
                commentState.comments.map((comment, index) => 
                    <Col className="comment__text" key={index}>
                        <div className="comment__text--title">{comment.username? comment.username : 'a user'} wrote:</div> 
                        {/* <div className="comment__text--title">{comment.userId} </div>  */}
                        <div className="comment__text--comment">{comment.comment}</div>
                    </Col>)
                    : ''}
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

export default Comments;

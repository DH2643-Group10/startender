import React, {useEffect, useState} from 'react';
import { Collapse } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SpinnerView from '../spinner/SpinnerView';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';

const Comments = () => {
    const dateFormat = (day)=>{
        const oldFormat = new Date(day).getTime();
        var d = new Date(oldFormat)
        var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
        d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
     return (datestring)
 }
    const [iscommentsLoading, setcommentsLoading] = useState(true);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);
    const [allComments,setComments] = useState([])
    console.log("commentState",commentState)
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
                        <div className="comment__text--date">{comment.date && dateFormat(comment.date)}</div>

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

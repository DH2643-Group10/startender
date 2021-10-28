import React, {useState, useEffect, FC} from 'react';
import CommentForm from './CommentsFormView';
import {CreateComment} from '../../actions/CommentsActions';
import Comments from './CommentsView';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//component meant to handle logic for comments
interface Props {
    drinktoshow: any
}


const CommentsController: FC<Props>  = ({...props}) => {

    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const userState = useSelector((state: RootStore) => state.databae);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);

    const dispatch = useDispatch();
    const handleComment = (newComment) => 
     {
        
        dispatch(CreateComment(newComment));
     }


    return (
        <Row className="comment">
            <h1 className="comment__title">Comments</h1>
            {/* If the user is signed in, the form is displayed */}
            {userState.isAuthenticated &&
            <CommentForm
                drinktoshow={props.drinktoshow}
                handleComment = {handleComment}
            />
           
            }
            {!commentState.commentsLoading && <Comments />
        }
        </Row>
    )
}

export default CommentsController

import React, {useState, useEffect} from 'react';
import CommentForm from './CommentsFormView';
import Comments from './CommentsView';
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//component meant to handle logic for comments

const CommentsController = ({drinktoshow}) => {

    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const userState = useSelector((state: RootStore) => state.databae);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);
    // for future theme integration:
    // const themeState = useSelector((state: RootStore) => state.themeReducer);


    // useEffect(() => {
    //     console.log('comments: ', commentState?.comments)

    // }, [commentState])

    return (
        <Row className="comment">
            <h1 className="comment__title">Comments</h1>
            {/* If the user is signed in, the form is displayed */}
            {userState.isAuthenticated &&
            <CommentForm
            drinktoshow={drinktoshow}/>
           
            }
            {/* {!commentState.commentsLoading ? 
            <Comments 
            />
            : console.log('NOOOOOT') */}
            {!commentState.commentsLoading && <Comments />
        }
        </Row>
    )
}

export default CommentsController

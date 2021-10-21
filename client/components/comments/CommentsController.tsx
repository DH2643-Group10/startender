import React, {useState, useEffect} from 'react';
import CommentForm from './CommentsFormView';
import Comments from './CommentsView';
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//component meant to handle logic for comments

const CommentsController = () => {

    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const userState = useSelector((state: RootStore) => state.databae);
    // for future theme integration:
    // const themeState = useSelector((state: RootStore) => state.themeReducer);

    const comments = null
    //get all comments for the drink
    useEffect(()=>{

    }, null)

    return (
        <Row className="comment">
            <h1 className="comment__title">Comments</h1>
            {/* If the user is signed in, the form is displayed */}
            {userState.isAuthenticated &&
            <CommentForm
            cocktailState={cocktailState}
            />
            }
            <Comments
            comments={comments}
            />
        </Row>
    )
}

export default CommentsController

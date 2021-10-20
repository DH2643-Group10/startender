import React, {useState, useEffect} from 'react';
import CommentForm from './CommentsFormView';

//component meant to handle logic for comments

const Comment = () => {

    return (
        <div className="comment">

            {/* If the user is signed in, the form is displayed */}
            <CommentForm/>
        </div>
    )
}

export default Comment


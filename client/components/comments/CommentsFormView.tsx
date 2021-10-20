import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import './styles.scss'
import Row from 'react-bootstrap/Row';
// import {CommentType} from '../../actions/CommentsActionTypes';
// import {CreateComment} from '../../actions/CommentsActions';


interface Values {
comment: string;
}

// var NewComment : CommentType = {userId:userId, drinkId:cocktailId, comment:'', date:new Date}

const CommentForm = () => {
return (
  <div>
    <h1>Add a comment</h1>
    <div className="form">
        <img className="form__img"></img>
        {/* <Row> */}
        <Formik
            initialValues={{
               comment: ''
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 500);
            }}
        >
            <Form>
                <Field id="comment" className="form__input" component="textarea"  rows="3" name="comment" placeholder="Have you tried this drink, what did you think?" />
                <button type="submit" className="form__button">Submit</button>
            </Form>
        </Formik>
        {/* </Row> */}
    </div>
  </div>
);
};

export default CommentForm

import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import './styles.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {CommentType} from '../../actions/CommentsActionTypes';
// import {CreateComment} from '../../actions/CommentsActions';
import Button from '../button/ButtonController'


interface Values {
comment: string;
}

// var NewComment : CommentType = {cocktailDBId:cocktailDBId, userId:userId, comment:'', date:new Date}

const CommentForm = ({cocktailState}) => {
return (

    <Col sm={1} md={1} lg={1} className="form">
        {/* <img className="form__img"></img> */}
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
                    alert(JSON.stringify(cocktailState, null, 2));
                    setSubmitting(false);
                    }, 500);
            }}
        >
            <Form>
                <Field id="comment" className="form__input"  rows="3" name="comment" placeholder="Have you tried this drink, what did you think?" />
                <button type="submit" className="form__button">Submit</button>
            </Form>
        </Formik>
    </Col>    
);
};

export default CommentForm

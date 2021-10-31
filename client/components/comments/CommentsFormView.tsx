import React, {FC, useEffect, useState} from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import './styles.scss'
import Col from 'react-bootstrap/Col'
import {CommentType} from '../../actions/CommentsActionTypes';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Store';

interface Values {
comment: string;
}

interface Props {
    drinktoshow: any,
    handleComment: (newComment: any) => void,
}

const CommentForm: FC<Props> = ({...props}) => {

    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const userState = useSelector((state: RootStore) => state.databae.currentUser);
    const userId = userState?.id;
    const username = userState?.username;

    const [comment, setComment] = useState('')

    return (

        <Col sm={12} md={4} lg={1} className="form">
            <Formik
                initialValues={{
                comment: ''
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting,resetForm }: FormikHelpers<Values>
                    ) => {
                        var newComment : CommentType = {cocktailDBId:props.drinktoshow?.idDrink, userId:userId, drinkId:'', comment:values.comment, username:username,};
                        setComment(values.comment);
                        setSubmitting(false);
                        props.handleComment(newComment)
                        resetForm();
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


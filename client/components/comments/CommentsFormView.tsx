import React, {useEffect, useState} from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import './styles.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {CommentType} from '../../actions/CommentsActionTypes';
import {CreateComment} from '../../actions/CommentsActions';
import Button from '../button/ButtonController'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { CocktailType } from '../../actions/CocktailActionTypes';

interface Values {
comment: string;
}

// var NewComment : CommentType = {cocktailDBId:cocktailDBId, userId:userId, comment:'', date:new Date}

const CommentForm = ({drinktoshow}) => {

    // console.log(drinktoshow)

    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const userId = useSelector((state: RootStore) => state.databae.currentUser?.id)
    const storedatabae = useSelector((state: RootStore) => state.databae)
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>storedatabae",storedatabae)
    const [comment, setComment] = useState('')
    
    // var newComment : CommentType = {cocktailDBId:drinktoshow?.idDrink, userId:userId, drinkId:'', comment:comment,};

    const dispatch = useDispatch();
    const handleComment = (newComment) => 
     {
        
        dispatch(CreateComment(newComment));
     }

    //  useEffect(() => {


    //     dispatch(CreateComment(newComment));
    //  }, [])

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
                    { setSubmitting,resetForm }: FormikHelpers<Values>
                    ) => {
                        var newComment : CommentType = {cocktailDBId:drinktoshow?.idDrink, userId:userId, drinkId:'', comment:values.comment,};
                        // alert(JSON.stringify(values.comment, null, 2));
                        setComment(values.comment);
                        setSubmitting(false);
                        handleComment(newComment)
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


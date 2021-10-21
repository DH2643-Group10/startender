import React, { useEffect, useState } from 'react';
import {Modal, Button, Image, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CocktailsType, CocktailType } from '../../actions/CocktailActionTypes';
import { GetAllComments } from '../../actions/CommentsActions';
import { RootStore } from '../../Store';
import CommentsController from '../comments/CommentsController';
import Comment from '../comments/CommentsController'

// Modal that shows more info of specific drink
const CardModal = (props) => {
    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const themeState = useSelector((state: RootStore) => state.themeReducer);
    const commentState = useSelector((state: RootStore) => state.commentsReducer);
    const dispatch = useDispatch();

    console.log('Comment state: ', commentState);
    console.log('Commentstate:.comments ', commentState.comments)

    console.log(props)

    useEffect(() => {
        // dispatch(GetAllComments()) depending on current drink id
        // dispatch(GetAllComments('15997'))
        dispatch(GetAllComments(props?.drinktoshow?.idDrink));
    }, [props?.drinktoshow?.idDrink])
   

    useEffect(() => {
        // turns all the ingredient and meassurement attributes into an array
        cocktailState.cocktail?.drinks?.map(drink => {
            var arr_i:string[][]=[];

            for(var i =1; i<16; i++){
                if(eval('drink.strIngredient' + i) != null) {
                    arr_i.push([ eval('drink.strMeasure' + i)?? ' ', eval('drink.strIngredient' + i)])
                }
            }
            drink.ingredientList = arr_i; 
        });
      }, [])

    return (
        <Modal
        {...props}
        dialogClassName="modal__dialog"
        aria-labelledby="example-custom-modal-styling-title"
        onHide={props.onHide}
        drinktoshow = {props.drinktoshow}
        className={'theme ' + (themeState.darkMode? 'theme--dark' : 'theme--default')}
    >
        <Modal.Header closeButton >
            <Modal.Title className="modal__title" >{props?.drinktoshow?.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body id={"body-"+props?.drinktoshow?.idDrink} className="modal__body">
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Image className="modal__img" id={"image-"+props?.drinktoshow?.idDrink} src={props?.drinktoshow?.strDrinkThumb}/>
                </Col>
                <Col sm={12} md={6} lg={8} className="modal__ingredients">
                    <Row>
                        <div className="modal__subheader">Ingredients</div>
                        {props?.drinktoshow?.ingredientList?.map(ing => (
                            <Col xs={12} sm={6} md={4}>
                                <Image className="modal__ingredients--image" src={"https://www.thecocktaildb.com/images/ingredients/" + ing[1] + "-Medium.png"} alt="" />
                                {ing}
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="modal__instructions">
                    <div className="modal__subtitle">Instructions:</div>
                    {props?.drinktoshow?.strInstructions}
                </Col>
            </Row>
            <CommentsController
            drinktoshow={props?.drinktoshow}
            />
            <Row>
                {/* TODO: Use Comment component for styling */}
                <div>Comments:</div>
                {props?.drinktoshow?.idDrink}
                {/*            
                {commentState.comments ? 
                <div> User {commentState.comments[0].userId} said {commentState.comments[0].comment}</div> : ''} */}

                {commentState.comments instanceof Array ? 
                    commentState.comments.map((comment) => <div>User {comment.userId} said {comment.comment} </div>) : ''
                }

            </Row>
        </Modal.Body>
        
    </Modal>
    )
}


export default CardModal;

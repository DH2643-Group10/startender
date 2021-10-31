import React, { useEffect, useState } from 'react';
import {Modal, Button, Image, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllComments } from '../../actions/CommentsActions';
import { AddToFavourites, RemoveFromFavourites } from '../../actions/DatabaeActions';
import { RootStore } from '../../Store';
import CommentsController from '../comments/CommentsController';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Modal that shows more info of specific drink
const CardModal = ({...props}) => {
    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const themeState = useSelector((state: RootStore) => state.themeReducer);
    const userState = useSelector((state: RootStore) => state.databae);
    const dispatch = useDispatch();
    
    const saveFavourite = () => {
        userState.currentUser &&
        dispatch(AddToFavourites(userState.currentUser,props?.drinktoshow?.idDrink))
    }
    const removeFavourite = () => {
        userState.currentUser &&
        dispatch(RemoveFromFavourites(userState.currentUser,props?.drinktoshow?.idDrink))
    }

    useEffect(() => {
        props.drinktoshow &&
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
      }, [cocktailState.cocktail]) // empty before

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
                <Col sm={12} md={6} lg={4} >
                    <Image className="modal__img" id={"image-"+props?.drinktoshow?.idDrink} src={props?.drinktoshow?.strDrinkThumb}/>
                      <Row>
                            {/* ADD to favourites */}

                            <Col >
                                {userState.isAuthenticated ? <> 
                                {userState.currentUser.favourites?.includes(props?.drinktoshow?.idDrink) ?
                                <FontAwesomeIcon size={"lg"} className="navbar__icon" icon="star" /> : <Button size="sm" onClick={saveFavourite}>Add to favourites</Button>} </>
                                : ""
                                }
                            </Col>
                            {/* REMOVE from favourites */}
                            <Col>
                                {userState.isAuthenticated ? <> 
                                    {userState.currentUser.favourites?.includes(props?.drinktoshow?.idDrink) ?
                                <Button size="sm" variant="danger" onClick={removeFavourite}> Remove </Button> :""} </>
                                    : <></>
                                }
                            </Col>
                         </Row>

                </Col>
                <Col sm={12} md={6} lg={8} className="modal__ingredients">
                    <Row>
                        <div className="modal__subheader">Ingredients</div>
                        {props?.drinktoshow?.ingredientList?.map((ing: Array<string>, index) => (
                            <Col xs={12} sm={6} md={4} key={index}>
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
                Drinkid: {props?.drinktoshow?.idDrink}
            </Row>
        </Modal.Body>
        
    </Modal>
    )
}


export default CardModal;

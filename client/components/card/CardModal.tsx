import React, { useEffect } from 'react';
import {Modal, Button, Image, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CocktailsType, CocktailType } from '../../actions/CocktailActionTypes';
import { RootStore } from '../../Store';

// Modal that shows more info of specific drink
const CardModal = (props) => {
    const cocktailState = useSelector((state: RootStore) => state.cocktails);
    const themeState = useSelector((state: RootStore) => state.themeReducer);

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
        <Modal.Header closeButton>
            <Modal.Title>{props?.drinktoshow?.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body id={"body-"+props?.drinktoshow?.idDrink} >
            <Row>
                <Col sm={6} md={6} >
                    <Image className="modal__img" id={"image-"+props?.drinktoshow?.idDrink} src={props?.drinktoshow?.strDrinkThumb}/>
                </Col>
                <Col sm={6} md={6} className="modal__ingredients">
                    <Row>
                        <div className="modal__subtitle">Ingredients</div>
                        {props?.drinktoshow?.ingredientList?.map(ing => (
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <Image className="modal__ingredients--image" src={"https://www.thecocktaildb.com/images/ingredients/" + ing[1] + "-Medium.png"} alt="" />
                                {ing}
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="modal__subtitle">Instructions:</div>
                    {props?.drinktoshow?.strInstructions}
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer id={"footer-"+props?.drinktoshow?.idDrink}  className="justify-content-center">
        <Button onClick={props.onHide}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>
    )
}


export default CardModal;
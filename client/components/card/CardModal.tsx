import React, { useEffect } from 'react';
import {Modal, Button, Image, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CocktailsType, CocktailType } from '../../actions/CocktailActionTypes';
import { RootStore } from '../../Store';

// Modal that shows more info of specific drink
const CardModal = (props) => {
    const cocktailState = useSelector((state: RootStore) => state.cocktails);

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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
        drinktoshow = {props.drinktoshow}
    >
        <Modal.Header closeButton>
            <Modal.Title>{props?.drinktoshow?.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body id={"body-"+props?.drinktoshow?.idDrink} >
            <Row>
                <Col>
                    <Image className="modal__img" id={"image-"+props?.drinktoshow?.idDrink} src={props?.drinktoshow?.strDrinkThumb}/>
                </Col>
                <Col>
                    <div className="modal__subtitle">Ingredients</div>
                    <ul>
                        {props?.drinktoshow?.ingredientList?.map(ing => (
                            <li>
                                {ing}
                                <Image src={"https://www.thecocktaildb.com/images/ingredients/" + ing[1] + "-Medium.png"} alt="" />
                            </li>
                        ))}
                    </ul>
                    
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
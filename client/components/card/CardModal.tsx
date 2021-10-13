import React from 'react';
import {Modal, Button, Image, Row, Col} from 'react-bootstrap';
import { CocktailsType, CocktailType } from '../../actions/CocktailActionTypes';

// Modal that shows more info of specific drink

const CardModal = (props) => (
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
                <Image id={"image-"+props?.drinktoshow?.idDrink} src={props?.drinktoshow?.strDrinkThumb}/>
            </Col>
            <Col>
                <div className="sub-header">Instructions:</div>
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
  );

export default CardModal;
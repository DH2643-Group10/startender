import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetFromCocktailDB } from '../../actions/CocktailActions';
import { RootStore } from '../../Store';
import CardView from "./CardView"

//component meant to handle logic for cards
const CardController = () => {

    return (
        <div>
            <CardView/>
        </div>
    )
}

export default CardController

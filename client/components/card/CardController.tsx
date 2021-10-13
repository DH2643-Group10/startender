import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetFromCocktailDB } from '../../actions/CocktailActions';
import { RootStore } from '../../Store';
import CardView from "./CardView"
//component meant to handle logic for cards
const CardController = () => {
    const cocktailState = useSelector((state: RootStore) => state.cocktails);

    // const {data} = props;
    // const [apiData, setApiData] = useState(null)

    // // console.log("data: ",data)
    // // console.log("props",props)
    // useEffect(() => {
    // // console.log("data:",data)
    //     if(data.drinks){
    //         //when the async feth call is done, data.drinks is available.
            
    //         console.log(">>>>>>data fetched to Card",data)
    //         setApiData(data.drinks[0])
    //     } else{
    //         console.log("no fetched data to card")}
    // }, [data])
    // // console.log("data props",data)
    // console.log("apiData state",apiData)

    return (
        <div>
            <CardView/>
            {/* <CardView 
            imgUrl={apiData!==null ? apiData.strDrinkThumb : "https://alladrinkar.se/wp-content/uploads/2021/06/sex-on-the-beach-drink-500x375.png"}
            title={apiData!==null ? apiData.strDrink : 'Loading...'} 
            text={apiData!==null ? apiData.strInstructions : 'Loading...'}/>    */}
            {/* Gör något i denna stilen:
            {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}          */}
        </div>
    )
}

export default CardController

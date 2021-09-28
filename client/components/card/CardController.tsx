import React,{useState, useEffect} from 'react';
import CardView from "./CardView"
//component meant to handle logic for cards
const Card = ({data}) => {
const [apiData, setApiData] = useState(null)
// console.log("data prop: ",data)
// console.log("apiData: ",apiData)

useEffect(() => {
    if(data.drinks){
        console.log(">>>>>>data fetched to Card",data)
        setApiData(data.drinks[0])
    } else{
        console.log("no fetched data to card")}
    }, [data])
    // console.log("data props",data)
    // console.log("apiData state",apiData)

    return (
        <div>
            <CardView 
            imgUrl={apiData!==null ? apiData.strDrinkThumb : "https://alladrinkar.se/wp-content/uploads/2021/06/sex-on-the-beach-drink-500x375.png"}
            title={apiData!==null ? apiData.strDrink : 'Loading...'} 
            text={apiData!==null ? apiData.strInstructions : 'Loading...'}/>            
        </div>
    )
}

export default Card

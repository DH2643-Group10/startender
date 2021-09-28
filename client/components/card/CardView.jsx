import React from "react"
//component meant to display to display drink cards and perhaps other things aswell
const CardView = ({imgUrl,text}) => {
    return (
        <div>
            <img style={{width:"200px",height:"200px"}} src={ imgUrl ? imgUrl : "https://alladrinkar.se/wp-content/uploads/2021/06/sex-on-the-beach-drink-500x375.png"}/> 
            <div>
                {text ? text : 'lorem lorem ipsum' }
            </div>
        </div>
    )
}

export default CardView

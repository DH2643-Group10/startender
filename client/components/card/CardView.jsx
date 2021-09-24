import React from "react"

const Card = ({imgUrl,text}) => {
    return (
        <div>
            <img url={ imgUrl ? imgUrl : "https://alladrinkar.se/wp-content/uploads/2021/06/sex-on-the-beach-drink-500x375.png"}> </img>
            <div>
                {text ? text : 'lorem lorem ipsum' }
            </div>
        </div>
    )
}

export default Card

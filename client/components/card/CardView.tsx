import React, { FC } from "react"
//component meant to display to display drink cards and perhaps other things aswell

interface Props {
    imgUrl?: string,
    text: string
}

const CardView: FC<Props> = ({imgUrl, text}) => {
    return (
        <div style={{background:'gray',width:"250px", border:"black 2px solid", borderRadius:"5px"}}>
            <img style={{width:"200px",height:"200px"}} src={ imgUrl ? imgUrl : "https://alladrinkar.se/wp-content/uploads/2021/06/sex-on-the-beach-drink-500x375.png"}/> 
            <div>
                {text ? text : 'lorem lorem ipsum' }
            </div>
        </div>
    )
}

export default CardView

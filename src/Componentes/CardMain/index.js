import React from "react";
import'./style.css'



const CardMain = (props) => {
    return(

        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={props.img} alt = {props.signo} height='230px' width='230px'></img>
            </div>
            <div class="flip-card-back">
                {props.signo}
                <br/> 
                {props.desc}
                <br/>
                {props.dataInicio} - {props.dataFim}
            </div>
        </div>
        </div>
    )
}

export default CardMain;
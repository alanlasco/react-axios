import React from 'react';
import ApiGetPoema from './ApiGetPoema.jsx';


const Poema = (props) =>{
    return(
        <div>
        <h4 key={props.id}>{props.nombre}</h4>
        <p key={props.id}>{props.texto}</p>
        <p key={props.id}>{props.fecha}</p>
        </div >
    )
}
export default Poema;
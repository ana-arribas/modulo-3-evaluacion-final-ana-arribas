import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    return <div id={props.id}>
        <Link to={`/character/${props.id}`}>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.specie}</p>
        </Link>
    </div >
}

export default CharacterCard
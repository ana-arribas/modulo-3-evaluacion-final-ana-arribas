import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
    return <div>
        <Link to="/">
            <button>Volver</button>
        </Link>
        <img src={props.oneCharacter.image} alt={props.oneCharacter.name} />
        <h1>{props.oneCharacter.name}</h1>
        <p>Species: {props.oneCharacter.species}</p>
        <p>Planet: {props.oneCharacter.origin.name}</p>
        <p>Episodes: {props.oneCharacter.episode.length}</p>
        <p>Status: {props.oneCharacter.status}</p>
    </div>
}

export default CharacterDetail
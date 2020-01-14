import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
    return <div>
        <Link to="/">
            <button className="button-back">&lt; Volver</button>
        </Link>
        <div className="info-detail">
            <img src={props.oneCharacter.image} alt={props.oneCharacter.name} />
            <h1>{props.oneCharacter.name}</h1>
            <p>Species: {props.oneCharacter.species}</p>
            <p>Planet: {props.oneCharacter.origin.name}</p>
            <p>Episodes: {props.oneCharacter.episode.length}</p>
            <p>Status: {props.oneCharacter.status}</p>
        </div>
    </div>
}

CharacterDetail.propTypes = {
    oneCharacter: PropTypes.object
};

export default CharacterDetail
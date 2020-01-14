import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const CharacterCard = (props) => {
    return <div id={props.id}>
        <Link className="link-character" to={`/character/${props.id}`}>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.species}</p>
        </Link>
    </div >
}

CharacterCard.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,

};

export default CharacterCard
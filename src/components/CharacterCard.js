import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
    return <div id={props.id} className="list-item">
        <Link className="App-list-li-character" to={`/character/${props.id}`}>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.species}</p>
        </Link>
    </div >
}
CharacterCard.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
export default CharacterCard
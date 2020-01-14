import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
    return <div className="App-detail">
        <Link to="/">
            <button className="App-detail-button">&lt; Back</button>
        </Link>
        <div className="App-detail-info">
            <img src={props.oneCharacter.image} alt={props.oneCharacter.name} />
            <div className="App-detail-info-names">
                <h1>{props.oneCharacter.name}</h1>
                <p>Species: {props.oneCharacter.species + ' '}
                    {(props.oneCharacter.species === 'Alien')
                        ? <i class="fab fa-optin-monster"></i>
                        : <i class="fas fa-male"></i>}
                </p>
                <p>Planet: {props.oneCharacter.origin.name}</p>
                <p>Episodes: {props.oneCharacter.episode.length}</p>
                <p>Status: {props.oneCharacter.status + ' '}
                    {(props.oneCharacter.status === 'Alive')
                        ? <i class="fas fa-heart"></i>
                        : (props.oneCharacter.status === 'Dead')
                            ? <i class="fas fa-skull-crossbones"></i>
                            : <i class="fas fa-question"></i>}
                </p>
            </div>
        </div>
    </div>
}
CharacterDetail.propTypes = {
    oneCharacter: PropTypes.object
}
export default CharacterDetail
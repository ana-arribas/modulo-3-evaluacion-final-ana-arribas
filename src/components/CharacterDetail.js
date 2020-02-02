import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
    return <div className="App-detail">
        <Link to="/">
            <button className="App-detail-button">&lt; Back</button>
        </Link>
        <div className="App-detail-info">
            <img src={props.singleCharacter.image} alt={props.singleCharacter.name} />
            <div className="App-detail-info-names">
                <h1>{props.singleCharacter.name}</h1>
                <p>Species: {props.singleCharacter.species + ' '}
                    {(props.singleCharacter.species === 'Alien')
                        ? <i class="fab fa-optin-monster"></i>
                        : <i class="fas fa-male"></i>}
                </p>
                {/* <p>Planet: {props.singleCharacter.origin.name}</p> */}
                {/* <p>Episodes: {props.singleCharacter.episode.length}</p> */}
                <p>Status: {props.singleCharacter.status + ' '}
                    {(props.singleCharacter.status === 'Alive')
                        ? <i class="fas fa-heart"></i>
                        : (props.singleCharacter.status === 'Dead')
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
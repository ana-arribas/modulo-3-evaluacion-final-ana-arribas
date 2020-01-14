import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
    return <div className="detail-wrapper">
        <Link to="/">
            <button className="button-back">&lt; Back</button>
        </Link>
        <div className="info-detail">
            <img src={props.oneCharacter.image} alt={props.oneCharacter.name} />
            <div className="info-detail-names">
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
export default CharacterDetail
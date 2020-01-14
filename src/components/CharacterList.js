import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
    return <ul className="list">
        {props.allCharacters
            .filter(eachCharacter => props.inputValue === '' || eachCharacter.name.toLowerCase().includes(props.inputValue.toLowerCase()))
            .map(eachCharacter => <li className="character-li" key={eachCharacter.id}>
                <CharacterCard
                    image={eachCharacter.image}
                    name={eachCharacter.name}
                    species={eachCharacter.species}
                    id={eachCharacter.id}
                />
            </li>
            )}
    </ul>
}

CharacterList.propTypes = {
    allCharacters: PropTypes.array
};

export default CharacterList
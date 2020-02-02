import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
    return <ul className="App-list">
        {props.allCharacters
            // .filter(item => props.isChecked ? item.gender === 'Female' : true)
            .filter(eachCharacter => props.inputValue === '' || eachCharacter.name.toLowerCase().includes(props.inputValue.toLowerCase()))
            .map(eachCharacter => <li className="App-list-li" key={eachCharacter.id}>
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
    allCharacters: PropTypes.array,
    inputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
export default CharacterList
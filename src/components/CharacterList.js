import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    return <ul>
        {props.allCharacters.map(eachCharacter => <li key={eachCharacter.id}>
            <CharacterCard
                name={eachCharacter.name}
                image={eachCharacter.image}
                id={eachCharacter.id}
            />
        </li>
        )}
    </ul>
}

export default CharacterList
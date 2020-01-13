import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    return <ul>
        {props.allCharacters
            .filter(eachCharacter => props.value === '' || eachCharacter.name.toLowerCase().includes(props.value.toLowerCase()))
            .map(eachCharacter => <li key={eachCharacter.id}>
                <CharacterCard
                    image={eachCharacter.image}
                    name={eachCharacter.name}
                    specie={eachCharacter.species}
                    id={eachCharacter.id}
                />
            </li>
            )}
    </ul>
}

export default CharacterList
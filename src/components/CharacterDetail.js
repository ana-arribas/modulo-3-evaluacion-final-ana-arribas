import React from 'react';


const CharacterDetail = (props) => {
    console.log(props)
    return <div>

        <img src={props.oneCharacter.image} />
        <h1>{props.oneCharacter.name}</h1>
        <p>{props.oneCharacter.species}</p>
        {/* <p>{props.oneCharacter.origin.name}</p> */}
        {/* <p>{props.oneCharacter.episode.length}</p> */}
        <p>{props.oneCharacter.status}</p>
    </div>
}

export default CharacterDetail
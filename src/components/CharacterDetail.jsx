import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = ({character = {}}) => {
    return (

        <div>
            <h2>{character.name}</h2>
            {character.thumbnail && <img src={character.thumbnail} alt={character.name} />}

            <p>{character.description}</p>
            {character.thumbnail && <img src={character.thumbnail} alt={character.name} />}
        </div>








        // <ul id="characters">

        //     <li key={character.id}>{character.name}</li>
        //     <li key={character.id}> {character.description} </li>
            
        // </ul>

            // <img src={character.thumbnail} alt={character.name} />

    );
};

export default CharacterDetail;
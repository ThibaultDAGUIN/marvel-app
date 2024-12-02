import React from 'react';
import FormattedDate from './FormattedDate';

const CharacterDetail = ({character = {}}) => {
    return (

        <div>
            <h2>{character.name}</h2>


            {character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />}
            <p>{character.description}</p>
            {/* <p>Date de modification : {character.modified}</p> */}
            <p><FormattedDate date={character.modified} /></p>

        </div>


    );
};

export default CharacterDetail;
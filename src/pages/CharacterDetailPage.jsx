// CharacterDetailPage.js
import React from 'react';
import CharacterDetail from '../components/CharacterDetail';
import { useLoaderData } from 'react-router';



const CharacterDetailPage = () => {
   const character=useLoaderData();

   console.log(character);

    return (
        <div>
            {/* <CharacterDetail character={character} /> */}
            {character ? <CharacterDetail character={character} /> : 'loading...'}
        </div>
    );
};

export default CharacterDetailPage;
// CharacterDetailPage.js
import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';


const CharacterDetailPage = () => {
   const character=useRouteLoaderData();

   console.log(character);

    return (
        <div>
            <CharacterDetail character={character} />
        </div>
    );
};

export default CharacterDetailPage;
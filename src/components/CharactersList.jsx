import { Link } from "react-router-dom";
import React from 'react';
import FormattedDate from './FormattedDate';

export function CharactersList({characters= []}) {

   // Si la liste est vide, afficher un message d'erreur explicite
    // if (characters.length === 0) {
    //     return (
    //       <ul id="characters">
    //         <li>No characters available to display</li>
    //       </ul>
    //     );
    //   }
    
      // Sinon, afficher la liste des personnages
      return (
        <ul id="characters">
          {characters.map((character) => (
            <li key={character.id}>
              <Link to={`/characters/${character.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                    <strong>{character.name}</strong> - <small><FormattedDate date={character.modified} /></small>
              </Link>
            </li>
          ))}
        </ul>
      );
    }
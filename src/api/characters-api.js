import characters from '../data/characters.json';

// fonction getCharacters

export function getCharacters() {
    return characters;
  }


// fonction getCharacterById qui retourne un personnage en fonction de son id

export function getCharacterById({characters = [], id}) {
    const character = characters.find((character) => character.id === id);
    
    // if (!character) {
    //     throw new Error(`Character with id ${id} not found`);
    // } 
    return character;
  }
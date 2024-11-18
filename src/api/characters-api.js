import characters from '../data/characters.json';

// fonction getCharacters

// export function getCharacters(sortField = 'name', sortOrder = 'asc') {
//     return characters;
//   }

// fonction getCharacters avec tri
// http://localhost:5173/?sort=name&order=desc

export function getCharacters(sortField = 'name', sortOrder = 'asc') {
  console.log('sortField', sortField);
  console.log('sortOrder', sortOrder);
  return characters.sort((a, b) => {
      if (sortField === 'name') {
          return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortField === 'modified') {
          return sortOrder === 'asc' ? new Date(a.modified) - new Date(b.modified) : new Date(b.modified) - new Date(a.modified);
      }
      return 0;
  });
}

// fonction getCharacterById qui retourne un personnage en fonction de son id

export function getCharactersById(id) {
    const character = characters.find((character) => character.id === id);
    
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    } 
    return character;
  }



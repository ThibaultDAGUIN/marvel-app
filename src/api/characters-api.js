import characters from '../data/characters.json';

// fonction getCharacters

// export function getCharacters(sortField = 'name', sortOrder = 'asc') {
//     return characters;
//   }

// fonction getCharacters avec tri
// http://localhost:5173/?sort=name&order=desc

export function getCharacters(sort = 'name', order = 'asc') {
  console.log('sort', sort);
  console.log('order', order);
  return characters.sort((a, b) => {
      if (sort === 'name') {
          return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sort === 'modified') {
          return order === 'asc' ? new Date(a.modified) - new Date(b.modified) : new Date(b.modified) - new Date(a.modified);
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



// FILEPATH: /c:/Users/tdaguin/marvel-app/src/api/characters-api.test.js
import { getCharacters, getCharactersById } from './characters-api';
import characters from '../data/characters.json';

jest.mock('../data/characters.json', () => [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Thor' },
  { id: 3, name: 'Hulk' },
]);

describe('getCharacters', () => {
  it('should return the list of characters', () => {
    const result = getCharacters();
    expect(result).toEqual(characters);
  });
});

describe('getCharactersById', () => {
  it('should return the correct character for a valid ID', () => {
    const result = getCharactersById(1);
    expect(result).toEqual({ id: 1, name: 'Iron Man' });
  });

  it('should throw an error for an invalid ID', () => {
    expect(() => getCharactersById(999)).toThrow('Character with id 999 not found');
  });
});
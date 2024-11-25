// FILEPATH: /c:/Users/tdaguin/marvel-app/src/api/characters-api.test.js
import { getCharacters, getCharactersById } from './characters-api';
import characters from '../data/characters.json';

jest.mock('../data/characters.json', () => [
  { id: 1, name: 'Iron Man', modified: '2021-01-01' },
  { id: 2, name: 'Thor', modified: '2021-02-01' },
  { id: 3, name: 'Hulk', modified: '2021-03-01' },
]);

// describe('getCharacters', () => {
//   it('should return the list of characters', () => {
//     const result = getCharacters();
//     expect(result).toEqual(characters);
//   });
// });

describe('getCharacters', () => {
  it('should return the list of characters sorted by name in ascending order', () => {
    const result = getCharacters('name', 'asc');
    console.log('result', result);
    expect(result).toEqual([
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
      { id: 1, name: 'Iron Man', modified: '2021-01-01' },
      { id: 2, name: 'Thor', modified: '2021-02-01' },
    ]);
  });

  it('should return the list of characters sorted by name in descending order', () => {
    const result = getCharacters('name', 'desc');
    expect(result).toEqual([
      { id: 2, name: 'Thor', modified: '2021-02-01' },
      { id: 1, name: 'Iron Man', modified: '2021-01-01' },
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
    ]);
  });

  it('should return the list of characters sorted by modified date in ascending order', () => {
    const result = getCharacters('modified', 'asc');
    expect(result).toEqual([
      { id: 1, name: 'Iron Man', modified: '2021-01-01' },
      { id: 2, name: 'Thor', modified: '2021-02-01' },
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
    ]);
  });

  it('should return the list of characters sorted by modified date in descending order', () => {
    const result = getCharacters('modified', 'desc');
    expect(result).toEqual([
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
      { id: 2, name: 'Thor', modified: '2021-02-01' },
      { id: 1, name: 'Iron Man', modified: '2021-01-01' },
    ]);
  });
});

describe('getCharactersById', () => {
  it('should return the correct character for a valid ID', () => {
    const result = getCharactersById(1);
    expect(result).toEqual({ id: 1, name: 'Iron Man', modified: '2021-01-01' });
  });

  it('should throw an error for an invalid ID', () => {
    expect(() => getCharactersById(999)).toThrow('Character with id 999 not found');
  });
});

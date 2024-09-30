
export function CharactersList({characters= []}) {

   // Si la liste est vide, afficher un message d'erreur explicite
    if (characters.length === 0) {
        return (
          <ul id="characters">
            <li>No characters available to display</li>
          </ul>
        );
      }
    
      // Sinon, afficher la liste des personnages
      return (
        <ul id="characters">
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      );
    }
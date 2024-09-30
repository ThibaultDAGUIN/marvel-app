


// There is x characters ou le message 
// There is no character si la liste est vide

export function NumberOfCharacters({ characters= []}) {
    let message;
  
    if (characters.length === 0) {
      message = "There is no character";
    } else {
      message = `There are ${characters.length} characters`;
    }
  
    return (
      <div>
        {message}
      </div>
    );
  }
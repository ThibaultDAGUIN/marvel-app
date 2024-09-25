import './App.css'
import characters from './data/characters.json'

function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <ul id="characters">
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}
          </li>
        ))}

        {/* <li>
          Beast
        </li>
        <li>
          Captain America
        </li>
        <li>
          Deadpool
        </li> */}

        
      </ul>
    </>
  )
}

export default App

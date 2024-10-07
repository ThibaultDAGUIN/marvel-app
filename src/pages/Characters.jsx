import '../App.css'
import { CharactersList } from '../components/CharactersList'
import { NumberOfCharacters } from '../components/NumberOfCharacters';
import characters from '../data/characters.json'


// export default function Characters () {

//     document.title = 'About Us | Marvel\'s Characters';

//        return (
//         <>
        
//         <h1>Marvel Characters</h1>
//         <CharactersList characters={characters}/>
//         <NumberOfCharacters characters={characters}/>

//         </>

//        )}

const Characters =() => {

    document.title = 'About Us | Marvel\'s Characters';

       return (
        <>
        
        <h2>Marvel Characters</h2>
        <CharactersList characters={characters}/>
        <NumberOfCharacters characters={characters}/>

        </>

       )
}

export default Characters
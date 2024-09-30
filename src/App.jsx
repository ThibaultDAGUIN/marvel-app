// Hello avec React.createElement("h1",...)

/*
import React from "react";
function App() {
  return React.createElement("h1", {}, "Hello World");
}
export default App;
*/

// Hello avec balise h1

// function App() {
//   return (<h1>Hello World from react with JSX</h1>);
// }
// export default App;

// Petite app

// function Title({ color = 'red', children, hidden = false, ...props }) {
//   if (hidden) {
//       return null;
//   }
//   return (<h1 style={{color: color}} {...props}>{children}</h1>);
// }
// function App() {
// return (
//   <>
//     {/* 
//         La propriété id et data-demo sont passées au composant Title grâce au spread operator.
//         La propriété color est définie dans le composant Title
//      */}
//     <Title color="blue" id="my-id" data-demo="demo">Hello World</Title>
//   </>
// );
// }
// export default App;



import './App.css'
import { CharactersList } from './components/CharactersList'
import characters from './data/characters.json'



function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList characters={characters}/>
    </>
  )
}

export default App

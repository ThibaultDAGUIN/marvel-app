// import './App.css'
// import { CharactersList } from './components/CharactersList'
// import { NumberOfCharacters } from './components/NumberOfCharacters'

// import characters from './data/characters.json'
// import About from './pages/AboutPage'
// import Characters from './pages/Characters'
// import Contact from './pages/Contact'



// function App() {
//   return (
//     <>
//       <Characters/>
//       {/* <About/> */}
//       {/* <Contact/> */}
      

//     </>
//   )
// }

// export default App

//  ----------------------------------------------------------------

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import routes from './routes';

// // Create a router that uses the client side history strategy for
// const router = createBrowserRouter(routes)

// export default function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }
//  ----------------------------------------------------------------

import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App
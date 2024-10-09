
import { getCharacters,getCharactersById } from "./api/characters-api";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import Layout from "./components/Layout";
import About from "./pages/AboutPage";
import Characters from "./pages/Characters";
import Contact from "./pages/Contact";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Characters />,
                loader: () => getCharacters(),
            
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharactersById(params.id),
            },
            {
                path: "/about",
                element: <About />
            },
            { path: "/contact", element: <Contact /> },
        ],
    },
];

export default routes;
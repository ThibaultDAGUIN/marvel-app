
import { getCharacters,getCharactersById } from "./api/characters-api";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import Layout from "./components/Layout";
import About from "./pages/AboutPage";
import Characters from "./pages/Characters";
import Contact from "./pages/Contact";
import CompareCharactersPage from "./pages/Compare";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Characters />,
                // loader: () => getCharacters(),
                loader: ({ request }) => {
                    const url = new URL(request.url);
                    const sort = url.searchParams.get('sort') || 'name';
                    const order = url.searchParams.get('order') || 'asc';
                    console.log('sort', sort);
                    console.log('order', order);
                    return getCharacters(sort, order);
                },
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharactersById(params.id),
            },
            {
                path: "/compare",
                element: <CompareCharactersPage/>,
                loader: () => {
                    return getCharacters();
                    }
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
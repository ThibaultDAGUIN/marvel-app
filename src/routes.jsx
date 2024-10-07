
import Layout from "./components/Layout";
import About from "./pages/AboutPage";
import Characters from "./pages/Characters";
import Contact from "./pages/Contact";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Characters /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
];

export default routes;
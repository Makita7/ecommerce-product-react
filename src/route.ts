import { createBrowserRouter, RouterProvider } from "react-router";
import CollectionPage from "./pages/CollectionPage";
import About from "./pages/About";
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import Product from './pages/ProductPage';
import Contact from './pages/ContactPage';

export const router = createBrowserRouter([
    {path: "/", element:<CollectionPage> },
    {path: "/about", element:<About/> },
    {path: "/men", element:<MenPage/> },
    {path: "/women", element:<WomenPage/> },
    {path: "/prodcts:id", element:<Product/> },
    {path: "/contact", element:<Contact/> },
]);
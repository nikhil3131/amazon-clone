//react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//all the webpages pages
import {
    Cart,
    Error,
    HomepageLayout,
    Landing,
    Login,
    Products,
    Signup,
    SingleProduct,
    More,
    Menu,
    Profile,
} from "./pages";


//created different routes for multiple pages
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomepageLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "product/:id",
                element: <SingleProduct />,
            },
            {
                path: "/more",
                element: <More />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

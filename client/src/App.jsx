import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Cart,
    Error,
    HomepageLayout,
    Landing,
    Login,
    Products,
    Signup,
    SingleProduct,
} from "./pages";

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
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

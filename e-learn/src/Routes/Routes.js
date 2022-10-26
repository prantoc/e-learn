import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../layout/Layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);
import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Categories/Category";
import CategoryDetails from "../components/Category/CategoryDetails/CategoryDetails";
import CheckOut from "../components/CheckOut/CheckOut";
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
            },
            {
                path: "/categories",
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path: "/category/:id",
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
        ]
    },
]);
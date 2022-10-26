import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import ResetPassword from "../components/Auth/ResetPassowrd/ResetPassword";
import SignUp from "../components/Auth/SignUp/SignUp";
import VerifyEmail from "../components/Auth/VerifyEmail/VerifyEmail";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Categories/Category";
import CategoryDetails from "../components/Category/CategoryDetails/CategoryDetails";
import CheckOut from "../components/CheckOut/CheckOut";
import Error from "../components/Error/Error";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Layout from "../layout/Layout";
import PrivateRoutes from "./PrivateRoutes";
import VerifyEmailRoute from "./VerifyEmailRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categories",
                element: <Category></Category>,
                loader: () => fetch(`https://e-learn-murex.vercel.app/courses`)
            },
            {
                path: "/category/:id",
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`https://e-learn-murex.vercel.app/course/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://e-learn-murex.vercel.app/course/${params.id}`)
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/reset-password",
                element: <ResetPassword></ResetPassword>
            },
            {
                path: "/verify-email",
                element: <VerifyEmailRoute> <VerifyEmail></VerifyEmail></VerifyEmailRoute>
            },

        ]
    },
]);
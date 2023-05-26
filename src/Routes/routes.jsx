import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Addtoys from "../pages/AddToys/Addtoys";
import SingleCardData from "../pages/SingleCardData/SingleCardData";
import Alltoys from "../pages/Alltoys/Alltoys";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/MyToys/UpdateToys";
import Allcategorytoys from "../pages/home/Allcategorytoys";
import Blogs from "../pages/Blogs";
import Error from "../layout/Error";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";


const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "alltoys",
                element: <Alltoys></Alltoys>,
                loader: () => fetch('https://toy-marketplace-server-ruddy.vercel.app/toys')
            },
            {
                path: "addtoys",
                element: <PrivateRoute><Addtoys></Addtoys></PrivateRoute>
            },
            {
                path: "mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Register></Register>
            },
            {
                path: "/singledetails/:id",
                element: <PrivateRoute><SingleCardData></SingleCardData></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-marketplace-server-ruddy.vercel.app/findone/${params.id}`)
            },
            {
                path : "updatetoy/:id",
                element : <UpdateToys></UpdateToys>,
                loader : ({ params }) => fetch(`https://toy-marketplace-server-ruddy.vercel.app/findone/${params.id}`)
            },
            {
                path : "category/:name",
                element : <Allcategorytoys></Allcategorytoys>,
                loader : ({params}) => fetch(`https://toy-marketplace-server-ruddy.vercel.app/toys/${params.name}`)
            },
            {
                path : "blog",
                element : <Blogs></Blogs>
            }
        ]
    },
    {
        path : "*",
        element : <Error></Error>,
        children : [{
            path : "*" ,
            element : <ErrorPage></ErrorPage>
        }]
    }
])

export default route;
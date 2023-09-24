import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import PhoneDetels from "../Component/PhoneDetels/PhoneDetels";

const MyCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/Phones.json")

            },
            {
                path: "/Favorites",
                element: <Favorites></Favorites>
            },
            {
                path: "/Login",
                element: <Login></Login>
            }, {
                path: "/Phone/:id",
                element: <PhoneDetels></PhoneDetels>,

                loader: () => fetch('/Phones.json')  //lode all phones details 

            }
        ]
    }
])

export default MyCreatedRouter;
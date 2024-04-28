import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyList from "../pages/MyList";
import PrivateRoutes from "./PrivateRoutes";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/my-list',
                element:<PrivateRoutes><MyList></MyList></PrivateRoutes>
            },
            {
                path:'/add-tourists-spot',
                element:<PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>
            },
            {
                path:'/all-tourists-spot',
                element:<AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('http://localhost:5000/tourists-spot')
            }
        ]
    }
])

export default router;
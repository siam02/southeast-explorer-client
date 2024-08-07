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
import UpdateTouristsSpot from "../pages/UpdateTouristsSpot";
import Countries from "../pages/Countries";
import AddCountry from "../pages/AddCountry";
import UpdateCountry from "../pages/UpdateCountry";
import TouristsSpotDetails from "../pages/TouristsSpotDetails";
import CountryDetails from "../pages/CountryDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('https://southest-explorer-server-opbmjysgv.vercel.app/tourists-spot')
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
                loader: () => fetch('https://southest-explorer-server-opbmjysgv.vercel.app/tourists-spot')
            },
            {
                path:'/update-tourists-spot/:id',
                element:<PrivateRoutes><UpdateTouristsSpot></UpdateTouristsSpot></PrivateRoutes>,
                loader: ({params}) => fetch(`https://southest-explorer-server-opbmjysgv.vercel.app/tourists-spot/${params.id}`)
            },
            {
                path:'/countries',
                element:<PrivateRoutes><Countries></Countries></PrivateRoutes>,
                loader: () => fetch('https://southest-explorer-server-opbmjysgv.vercel.app/country')
            },
            {
                path:'/add-country',
                element:<PrivateRoutes><AddCountry></AddCountry></PrivateRoutes>,
            },
            {
                path:'/update-country/:id',
                element:<PrivateRoutes><UpdateCountry></UpdateCountry></PrivateRoutes>,
                loader: ({params}) => fetch(`https://southest-explorer-server-opbmjysgv.vercel.app/country/${params.id}`)
            },
            {
                path:'/tourists-spot/:id',
                element:<PrivateRoutes><TouristsSpotDetails></TouristsSpotDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://southest-explorer-server-opbmjysgv.vercel.app/tourists-spot/${params.id}`)
            },
            {
                path:'/country/:id',
                element:<CountryDetails></CountryDetails>,
                loader: ({params}) => fetch(`https://southest-explorer-server-opbmjysgv.vercel.app/country/${params.id}`)
            }
        ]
    }
])

export default router;
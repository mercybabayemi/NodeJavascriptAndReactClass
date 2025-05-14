import {createBrowserRouter} from "react-router";
import SignUp from "../components/auth/signUp/signUp.jsx";
import Login from "../components/auth/login/login.jsx";
import Layout from "../components/layout/Layout.jsx";
import NowPlaying from "../components/movies/NowPlaying.jsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <SignUp/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <NowPlaying/>
            }
        ]
    }
])

export default router;
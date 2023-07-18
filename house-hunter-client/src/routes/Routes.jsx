import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Home/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    },
    { path: '/registration', element: <Registration /> },
    { path: '/login', element: <Login /> }
]);

export default router
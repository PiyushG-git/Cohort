import { createBrowserRouter } from "react-router";
import Login from "../feactures/auth/pages/Login";
import Register from "../feactures/auth/pages/Register";
import Dashboard from "../feactures/chat/pages/Dashboard";
import Protected from "../feactures/auth/components/Protected";

export const router=createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/",
        element:<Protected><Dashboard/></Protected>
    }
])
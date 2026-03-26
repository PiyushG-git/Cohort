import { createBrowserRouter } from "react-router"
import Register from "./features/auth/Pages/Register"
import Login from "./features/auth/Pages/Login"
import Feed from "./features/post/pages/Feed"
import CreatePost from "./features/post/pages/CreatePost"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Feed/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path:"/create-post",
        element:<CreatePost/>
    }
])
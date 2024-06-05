import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import { LoginAdmin } from "../components/login/LoginAdmin";
import { Login } from "../components/login/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: (<div>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with React and React Router.</p>
            <Link to="/about">About</Link>
            <p></p>
            <Link to="/login-admin">login admin</Link>
            <p></p>
            <Link to="/login">login cliente</Link>
        </div>)
    },
    {
        path: '/about',
        element: (<div>
            <h1>About</h1>
            <p>This is a simple example of a single-page application with React and React Router.</p>
            <Link to="/">Home</Link>
            <p></p>
            <Link to="/login-admin">login admin</Link>
            <p></p>
            <Link to="/login">login cliente</Link>
        </div>)
    },
    {
        path: '/login-admin',
        element: <LoginAdmin />
    },
    {
        path: '/login',
        element: <Login />
    }
]);


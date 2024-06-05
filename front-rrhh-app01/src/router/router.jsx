import { LoginAdmin } from "../components/admin/LoginAdmin";
import { Login } from "../components/clients/Login";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/login-admin',
        element: <LoginAdmin />
    },
    {
        path: '/login',
        element: <Login />
    }
]);


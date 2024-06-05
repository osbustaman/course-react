import { LoginAdmin } from "../components/admin/LoginAdmin";
import { PanelControl } from "../components/admin/PanelControl";
import { Login } from "../components/clients/Login";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/panel-control',
        element: <PanelControl />
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


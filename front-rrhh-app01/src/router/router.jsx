import { LoginAdmin } from "../pages/LoginAdmin";
import { PanelControl } from "../pages/PanelControl";
import { DashBoard } from "../pages/DashBoard";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";

import { LIstClients } from "../pages/LIstClients";

import { Login } from "../pages/Login";
import  { ProtectedRoute } from "./ProtectedRoute"
import { NotFound } from "../components/NotFound";


import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";

const PanelLayout = () => (
    <PanelControl>
        <Outlet />
    </PanelControl>
);

export const router = createBrowserRouter([
    {
        path: '/panel-control',
        element: <ProtectedRoute element={<PanelLayout />} />,
        children: [
            { path: 'dashboard', element: <DashBoard /> },
            { path: 'profile', element: <Profile /> },
            { path: 'settings', element: <Settings /> },
            { path: 'list-clients', element: <LIstClients /> },
            // Añade más rutas aquí si es necesario
        ]
    },
    {
        path: '/login-admin',
        element: <LoginAdmin />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
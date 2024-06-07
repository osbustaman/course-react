import { LoginAdmin } from "../components/admin/LoginAdmin";
import { PanelControl } from "../components/admin/PanelControl";
import { DashBoard } from "../components/admin/pages/DashBoard";
import { Profile } from "../components/admin/pages/Profile";
import { Settings } from "../components/admin/pages/Settings";

import { Login } from "../components/clients/Login";
import  { ProtectedRoute } from "./ProtectedRoute"
import { NotFound } from "../components/admin/NotFound";

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
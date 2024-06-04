import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login/Login"
import { LoginAdmin } from "./components/login/LoginAdmin"

export const App = () => {
    return (
        <AppProvider>
            <Routes>
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AppProvider>

    )
}

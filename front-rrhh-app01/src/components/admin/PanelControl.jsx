import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

import '../../static/sidebar.css'

export const PanelControl = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  }
  return (
    <> 
      <div className="d-flex">
      <Sidebar />
        <div className="content flex-grow-1 p-3">
          <h1>Panel de Control</h1>
          <p>Bienvenido</p>
          <div onClick={handleLogout}>
            <Link to="/login-admin">Cerrar Sesión</Link>
          </div>
          <Outlet />
        </div>
      </div>   
    </>
  )
}

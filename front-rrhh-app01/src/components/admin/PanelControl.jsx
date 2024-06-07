import { Link } from "react-router-dom";

export const PanelControl = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
  }

  return (
    <>
      <h1>Panel de Control</h1>
      <p>Bienvenido</p>

      <div onClick={ handleLogout }>
        <Link to="/login-admin">Cerrar Sesión</Link>
      </div>
      
    </>
  )
}

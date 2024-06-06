import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
        <div classname="d-flex align-items-center justify-content-center vh-100">
            <div classname="text-center">
                <h1 classname="display-1 fw-bold">404</h1>
                <p classname="fs-3"> <span classname="text-danger">Opps!</span> Pagina no encontrada.</p>
                <p classname="lead">
                    La página que estas buscan no existe.
                </p>
                <Link to="/login-admin">Volver al login</Link>
            </div>
        </div>
    </>
  )
}

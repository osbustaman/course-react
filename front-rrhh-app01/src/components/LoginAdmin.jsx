
import '../styles/style.css';


export const LoginAdmin = () => {



  return (
    <>
      <div className="container login-container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Login Administrador</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Usuario</label>
                    <input type="text" className="form-control" id="user" placeholder="Ingresa tu usuario" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

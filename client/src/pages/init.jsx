import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
    <>
      <div>
        <nav className="nav">
          <a className="nav-link active" aria-current="page" href="#">
            WalletDev
          </a>
          <a className="nav-link" href="/register">
            Iniciar sesion
          </a>
          <a className="nav-link" href="/register">
            Registrarse
          </a>
        </nav>
      </div>
    </>
  );
}

export default Home;

const Header = (props) => {
    return (
        <nav id="navbar" class="navbar navbar-dark navbar-expand-lg bg-dark">
            <div id="navegacion" class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img
                        src="https://nistol2.000webhostapp.com/images/tu%20conexion.jpg"
                        class="logo"
                        alt=""
                        width="105"
                        height="100"
                        Class="d-inline-block align-text-top"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html"
                            >Inicio</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#precios">Precios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#contacto">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#imgsobre"
                            >Sobre nosotros</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            );
            }

export default Header;
import logo from "./Logo";

function Header() {
    return (
        <>
        <div style={{backgroundColor: '#f8f8f8', marginTop: '0.2em'}}>
        <nav className="uk-navbar-container" uk-navbar="true">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li><img src={process.env.PUBLIC_URL + logo.eval} style={{height: '5em'}}alt=""/></li>
                    <li className="uk-active"><a href="#">Inicio</a></li>
                    <li>
                        <a href="#">Evaluaciones</a>
                        <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="#">Docencia</a></li>
                                <li><a href="#">Coevaluación</a></li>
                                <li><a href="#">Heteroevaluación</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Resultados</a></li>
                </ul>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Header;
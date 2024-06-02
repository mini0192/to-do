import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Links = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    {/* Homepage Link */}
                    <Link className="navbar-brand" href="#">
                        HomePage
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">
                                {/* Link 1 */}
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                {/* Link 2 */}
                                Features
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                {/* Link 3 */}
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {/* Drop Link */}
                                Dropdown link
                            </Link>
                        <ul className="dropdown-menu">
                            {/* Drop Link List */}
                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}
const Head = () => {
    return (
        <div className="head mainPage">
            <Links />
        </div>
    );
}

export default Head;
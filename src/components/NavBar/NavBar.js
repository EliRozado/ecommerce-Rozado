import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="brand">ecommerce</h1>
            <ul className="nav-menu">
                <li> <a className="nav-link" href="#">Home</a> </li>
                <li> <a className="nav-link" href="#">About</a> </li>
                <li> <a className="nav-link" href="#">Contact</a> </li>
            </ul>
        </nav>
    )
}

export default NavBar;
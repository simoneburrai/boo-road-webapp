import { NavLink } from "react-router-dom";

const Header = () => {
    return <header className="bg-secondary">
        <nav className="container d-flex justify-content-between  px-3 py-4">
            <NavLink to="/" className="text-decoration-none text-uppercase fs-3 mx-4">boroad</NavLink>
            <NavLink to="/travels" className="text-decoration-none text-uppercase fs-3 mx-4">Travels</NavLink>
        </nav>
    </header>
}

export default Header;
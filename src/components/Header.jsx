import { NavLink } from "react-router-dom";

const Header = () => {
    return <header className="mb-5">
        <nav className="container d-flex justify-content-between  px-3 py-4">
            <NavLink to="/" className="text-decoration-none text-uppercase fs-3 mx-4 boroad"> <span>bo</span>road</NavLink>
            <NavLink to="/travels" className="text-decoration-none text-uppercase fs-3 mx-4 boroad">Travels</NavLink>
        </nav>
        <input type="checkbox" name="toggleMode" id="toggleMode" /><label className="darkmode" htmlFor="toggleMode"><i className="fas fa-sun"></i></label>
    </header>
}

export default Header;
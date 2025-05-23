import { NavLink } from "react-router-dom";

const Header = () => {
    return <header className="mb-3 mb-md-5">
        <nav className="container d-flex justify-content-between align-items-center py-3">
            <div>
                <NavLink to="/" className="text-decoration-none text-uppercase mx-4 boroad"><span>boo</span>road</NavLink>
            </div>
            <div>
                <NavLink to="/travels" className="text-decoration-none text-uppercase mx-4 boroad">Travels</NavLink>
                <NavLink to="/newtravel" className="text-decoration-none text-uppercase mx-4 boroad">New Travel</NavLink>
            </div>
            <input type="checkbox" name="toggleMode" id="toggleMode" /><label className="darkmode" htmlFor="toggleMode"><i className="fas fa-sun"></i></label>
        </nav>

    </header>
}

export default Header;
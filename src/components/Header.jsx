import { NavLink } from "react-router-dom";

const Header = () => {
    return <header className="mb-5">
        <nav className="container d-flex justify-content-between  px-3 py-4">
            <NavLink to="/" className="text-decoration-none text-uppercase mx-4 boroad"> <span>boo</span>road</NavLink>
            <div>
                <NavLink to="/travels" className="text-decoration-none text-uppercasemx-4 boroad">Travels</NavLink>
                <NavLink to="/newtravel" className="text-decoration-none text-uppercase mx-4 boroad">New Travel</NavLink>
            </div>
            <input type="checkbox" name="toggleMode" id="toggleMode" /><label className="darkmode" htmlFor="toggleMode"><i className="fas fa-sun"></i></label>
        </nav>

    </header>
}

export default Header;
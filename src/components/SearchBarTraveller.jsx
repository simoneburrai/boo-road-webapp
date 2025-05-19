import { useState } from "react";

const SearchBarTraveller = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4 d-flex justify-content-center">
            <input
                type="text"
                placeholder="Cerca Utente per Nome, Cognome, Nazionalità"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="form-control w-50 mb-4 me-3"
            />
            <button type="submit" className="mb-4 btn btn-light">Cerca</button>
        </form>

    )
}

export default SearchBarTraveller;
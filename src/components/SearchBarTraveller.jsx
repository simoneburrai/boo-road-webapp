import { useState } from "react";

const SearchBarTraveller = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    return (
        <input
            type="text"
            placeholder="Cerca Utente"
            value={searchValue}
            onChange={handleChange}
            className="form-control w-50 mb-4"
        />
    )
}

export default SearchBarTraveller;
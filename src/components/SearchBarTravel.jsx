import { useState } from "react";

const SearchBarTravel = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Cerca viaggio"
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
            className="form-control w-50 mb-4"
        />
        <button type="submit">Cerca</button>
        </form>
        
    )
}

export default SearchBarTravel;
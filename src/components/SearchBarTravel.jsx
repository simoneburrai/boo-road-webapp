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
            placeholder="Inserisci Info Viaggio"
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
            className="form-control w-30 mb-4"
        />
        <button type="submit" class="btn btn-light">Cerca</button>
        </form>
        
    )
}

export default SearchBarTravel;
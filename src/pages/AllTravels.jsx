import TravelCard from "../components/travels/TravelCard";
import SearchBarTravel from "../components/SearchBarTravel";
import { useTravels } from "../contexts/TravelContext"
import { useState } from "react";

const AllTravels = () => {
    const { travels, filteredTravels, setFilteredTravels } = useTravels()
    const [searchCity, setSearchCity] = useState("");

    const handleSearch = (city) => {
        setSearchCity(city);
        if (city === "") {
            setFilteredTravels(travels);
        } else {
            const filtered = travels.filter(travel =>
                travel.destination.city.toLowerCase().includes(city.toLowerCase()) ||
                travel.destination.country.toLowerCase().includes(city.toLowerCase())
            );
            setFilteredTravels(filtered);
        }
    };

    return (
        <div>
            <div className="d-flex flex-row mb-5 justify-content-between mx-3">
                <h2 className=" text-center">Naviga tra tutti i nostri viaggi!</h2>
                <SearchBarTravel onSearch={handleSearch} />
            </div>
            <TravelCard travels={filteredTravels} />
        </div>
    )
}

export default AllTravels;
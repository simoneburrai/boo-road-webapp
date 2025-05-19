import { useParams, useNavigate, Link } from "react-router-dom";
import { useTravels } from "../contexts/TravelContext"
import TravellerCard from "../components/travellers/TravellerCard"
import { useEffect, useState } from "react";
import SearchBarTraveller from "../components/SearchBarTraveller";

const AllTravellers = () => {
    const navigate = useNavigate();
    let { travelId } = useParams();
    travelId = parseInt(travelId);
    const { travellers } = useTravels()
    const currentTravellers = travellers.filter(traveller => traveller.travelId === travelId)
    const [filteredTravellers, setFilteredTravellers] = useState(currentTravellers);
    const [searchName, setSearchName] = useState("");

    const handleSearch = (name) => {
        setSearchName(name);
        if (name === "") {
            setFilteredTravellers(currentTravellers);
        } else {
            const filtered = currentTravellers.filter(traveller =>
                traveller.name.toLowerCase().includes(name.toLowerCase()) ||
                traveller.surname.toLowerCase().includes(name.toLowerCase()) ||
                traveller.nationality.toLowerCase().includes(name.toLowerCase()));
            setFilteredTravellers(filtered);
        }
    };

    // useEffect(()=> {
    //     if(currentTravellers.length === 0){
    //         navigate("/notfound");
    //     }
    // }, [currentTravellers, navigate])

    if (currentTravellers && currentTravellers.length > 0) {
        return <div>
            <SearchBarTraveller onSearch={handleSearch} />
            {filteredTravellers.map(traveller => {
                return <TravellerCard traveller={traveller} key={traveller.id} />
            })}
        </div>
    } else {
        return <div className="text-center text-white fs-1">
            Impossibile visualizzare i clienti dei viaggi passati...
            <div><Link to="/" className="btn btn-primary mb-4">Torna alla Home</Link></div>
        </div>
    }
}

export default AllTravellers;
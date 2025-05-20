import { useParams, useNavigate, Link } from "react-router-dom";
import { useTravels } from "../contexts/TravelContext";
import TravellerCard from "../components/travellers/TravellerCard";
import { useState, useEffect } from "react";
import SearchBarTraveller from "../components/SearchBarTraveller";

const AllTravellers = () => {
    const navigate = useNavigate();
    const { travelId } = useParams();
    const parsedTravelId = parseInt(travelId);

    const { filteredTravellers } = useTravels();
    const [selectedTravellers, setSelectedTravellers] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const filtered = filteredTravellers.filter(
            (traveller) => traveller.travelId === parsedTravelId
        );
        setSelectedTravellers(filtered);
    }, [filteredTravellers, parsedTravelId]);

    const handleSearch = (name) => {
        setSearchName(name);
        if (name === "") {
            const filtered = filteredTravellers.filter(
                (traveller) => traveller.travelId === parsedTravelId
            );
            setSelectedTravellers(filtered);
        } else {
            const filtered = filteredTravellers.filter(
                (traveller) =>
                    traveller.travelId === parsedTravelId &&
                    (traveller.name.toLowerCase().includes(name.toLowerCase()) ||
                        traveller.surname.toLowerCase().includes(name.toLowerCase()) ||
                        traveller.nationality.toLowerCase().includes(name.toLowerCase()))
            );
            setSelectedTravellers(filtered);
        }
    };

    if (selectedTravellers && selectedTravellers.length > 0) {
        return (
            <div>
                <SearchBarTraveller onSearch={handleSearch} />
                <div className="d-flex flex-wrap justify-content-between">
                    {selectedTravellers.map((traveller) => (
                        <TravellerCard traveller={traveller} key={traveller.id} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="text-center fw-bold fs-3">
                <p>Impossibile visualizzare i clienti dei viaggi passati...</p>
                <div>
                    <Link to="/" className="btn btn-primary mb-4">
                        Torna alla Home
                    </Link>
                </div>
            </div>
        );
    }
};

export default AllTravellers;

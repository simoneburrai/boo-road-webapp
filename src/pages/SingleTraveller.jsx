import { useNavigate, useParams } from "react-router-dom";
import { useTravels } from "../contexts/TravelContext"
import { useEffect } from "react";

const SingleTraveller = () => {

    const handleClick = () => { //funzione per contattare il cliente
        alert("Cliente contattato");
    }

    const navigate = useNavigate();
    const { filteredTravellers } = useTravels();
    let { id, travelId } = useParams();
    id = parseInt(id);
    travelId = parseInt(travelId)
    console.log(travelId, id);
    const currentTravellers = filteredTravellers.filter(traveller => traveller.travelId === travelId)
    const currentTraveller = currentTravellers.find(traveller => traveller.id === id);

    useEffect(() => {
        if (travellers.length > 0 && (!currentTraveller || currentTravellers.length === 0)) {
            navigate("/notfound");
        }
    }, [travellers, currentTraveller, currentTravellers, navigate]);


    if (currentTraveller && currentTravellers.length > 0) {
        return <div className="card p-4">
            <div className="my-1"><strong><i className="fa-solid fa-user"></i> Nome: </strong>{currentTraveller.name}</div>
            <div className="my-1"><strong><i className="fa-solid fa-user"></i> Cognome: </strong>{currentTraveller.surname}</div>
            <div className="my-1"><strong><i className="fa-solid fa-phone"></i> Numero di telefono: </strong>{currentTraveller.number}</div>
            <div className="my-1"><strong><i className="fa-solid fa-envelope"></i> Email: </strong>{currentTraveller.email}</div>
            <div className="my-1"><strong><i className="fa-solid fa-earth-americas"></i> Nazionalità: </strong>{currentTraveller.nationality}</div>
            <div className="my-1"><strong><i className="fa-solid fa-id-card"></i> Codice fiscale: </strong>{currentTraveller.idCode}</div>
            <div className="mb-3"><strong><i className="fa-solid fa-exclamation ps-1 pe-2"></i> Numero di emergenza: </strong>{currentTraveller.emergencyNumber}</div>
            <button className="btn btn-primary w-50  m-auto" onClick={handleClick}>Contatta</button>
        </div>
    }

}

export default SingleTraveller;
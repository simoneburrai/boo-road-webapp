import { useNavigate, useParams } from "react-router-dom";
import { useTravels } from "../contexts/TravelContext"
import { useEffect } from "react";

const SingleTraveller = () => {

    const handleClick = () => { //funzione per contattare il cliente
        alert("Cliente contattato");
    }

    const navigate = useNavigate();
    const { travellers } = useTravels();
    let { id, travelId } = useParams();
    id = parseInt(id);
    travelId = parseInt(travelId)
    console.log(travelId, id);
    const currentTravellers = travellers.filter(traveller => traveller.travelId === travelId)
    const currentTraveller = currentTravellers.find(traveller => traveller.id === id);

    useEffect(() => {
        if (travellers.length > 0 && (!currentTraveller || currentTravellers.length === 0)) {
            navigate("/notfound");
        }
    }, [travellers, currentTraveller, currentTravellers, navigate]);


    if (currentTraveller && currentTravellers.length > 0) {
        return <div className="card col-lg-3 p-3">
            <div><strong>Nome: </strong>{currentTraveller.name}</div>
            <div><strong>Cognome: </strong>{currentTraveller.surname}</div>
            <div><strong>Numero di telefono: </strong>{currentTraveller.number}</div>
            <div><strong>Email: </strong>{currentTraveller.email}</div>
            <div><strong>Nazionalità: </strong>{currentTraveller.nationality}</div>
            <div><strong>Codice fiscale: </strong>{currentTraveller.idCode}</div>
            <div className="mb-3"><strong>Numero di emergenza: </strong>{currentTraveller.emergencyNumber}</div>
            <button className="btn btn-primary" onClick={handleClick}>Contatta</button>
        </div>
    }

}

export default SingleTraveller;
import { Link } from "react-router-dom";

const TravellerCard = ({ traveller }) => {
    const { name, surname, number, id, travelId } = traveller;
    return (
        <div className="card m-4 p-3">
            <div>Nome: {name}</div>
            <div>Cognome: {surname}</div>
            <div>Numero di telefono: {number}</div>
            <Link className="btn btn-primary mb-4"
                to={`/travels/${travelId}/travellers/${id}`}>Dettagli Viaggiatore</Link>
        </div>
    )
}

export default TravellerCard;


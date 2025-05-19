import { Link } from "react-router-dom";

const TravellerCard = ({ traveller }) => {
    const { name, surname, number, id, travelId } = traveller;
    return (
        <div className="card travellercard p-3 mb-4">
            <div className="mb-2"><i className="fa-solid fa-user"></i> Nome: <strong>{name}</strong></div>
            <div className="mb-2"><i className="fa-solid fa-user"></i> Cognome: <strong>{surname}</strong></div>
            <div className="mb-4"><i className="fa-solid fa-phone"></i> Numero di telefono: <strong>{number}</strong></div>
            <Link className="btn btn-primary mb-1"
                to={`/travels/${travelId}/travellers/${id}`}>Dettagli Viaggiatore</Link>
        </div>
    )
}

export default TravellerCard;


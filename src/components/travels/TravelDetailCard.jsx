import { Link } from "react-router-dom";
import { format } from "date-fns";
import { it } from "date-fns/locale";

const TravelDetailCard = ({ travel }) => {
    const flight = travel.flight;
    const formattedStart = format(new Date(travel.start), "d MMMM yyyy", { locale: it });
    const formattedEnd = format(new Date(travel.end), "d MMMM yyyy", { locale: it });

    return (
        <div className="card mt-5">
            <div className=" d-flex flex-row justify-content-around mb-4">
                <div className="detail-img w-50">
                    <img className="w-100 rounded" src={travel.image} alt={travel.destination.city} />
                </div>
                <div className="w-100 p-4">
                    <h3 className="p-2 m-4 text-center fst-italic text-danger fs-1">{travel.destination.city}</h3>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h4 className="mb-3">{formattedStart}</h4>
                        <h5 className="p-2 mb-3 fst-italic">{travel.duration} giorni</h5>
                        <h4 className="p-2 mb-3">{formattedEnd}</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-around">
                        <h4 className=" mb-4">Costo: {travel.price} €</h4>
                        <Link to={`/travels/${travel.id}/travellers`}
                            className="btn btn-primary mb-4"
                        >Vedi tutti i viaggiatori</Link>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <p className="fst-italic fs-3">{travel.description}</p>
                {flight && <div className="p-2">
                    <h5 className="text-danger fs-3 mb-4">Dettagli volo</h5>
                    <ul className="list-unstyled fs-5">
                        <li>
                            Compagnia: <span className="fw-bold">{flight.airline}</span>
                        </li>
                        <li>
                            Numero Volo: <span className="fw-bold">{flight.flightNumber}</span>
                        </li>
                        <li>
                            Partenza Aeroporto: <span className="fw-bold">{flight.departureAirport}</span>
                        </li>
                        <li>
                            Arrivo Aeroporto: <span className="fw-bold">{flight.arrivalAirport}</span>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

// "airline": "EasyJet",
//       "flightNumber": "EJU2869",
//       "departureAirport": "Barcellona BCN",
//       "arrivalAirport": "Napoli NAP"

export default TravelDetailCard;
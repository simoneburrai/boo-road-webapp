import { Link } from "react-router-dom";
import { format } from "date-fns";
import { it } from "date-fns/locale";

const TravelDetailCard = ({ travel }) => {
    const flight = travel.flight;
    const formattedStart = format(new Date(travel.start), "d MMMM yyyy", { locale: it });
    const formattedEnd = format(new Date(travel.end), "d MMMM yyyy", { locale: it });

    return (
        <div className="card">
            <div className=" d-flex flex-column flex-md-row justify-content-around mb-2 mb-lg-5">
                <div className="detail-img image">
                    <img className="w-100 p-2 " src={travel.image} alt={travel.destination.city} />
                </div>
                <div className="p-3 px-2 px-lg-5 detailtext">
                    <h3 className="m-2 m-lg-4 text-center fst-italic fs-1"><i class="fa-solid fa-plane"></i> {travel.destination.city}</h3>
                    <div className="d-flex flex-row justify-content-between align-items-center mb-2 mb-lg-5">
                        <h4 className="mb-3 traveltext">{formattedStart}</h4>
                        <h5 className="p-2 mb-3 fst-italic traveltext">{travel.duration} giorni</h5>
                        <h4 className="p-2 mb-3 traveltext">{formattedEnd}</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center">
                        <h4 className=" mb-4 mx-2 traveltext flex-shrink-0">Costo: {travel.price} €</h4>
                        <Link to={`/travels/${travel.id}/travellers`}
                            className="btn btn-primary mb-4"
                        >Vedi tutti i viaggiatori</Link>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <p className="fst-italic fs-3">{travel.description}</p>
                {flight && <div className="p-2">
                    <h5 className="fs-3 mb-4">Dettagli volo</h5>
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
import { Link } from "react-router-dom";

const TravelDetailCard = ({travel}) => {
    const flight = travel.flight;
    return (
        <div className="card">
            <div className=" d-flex flex-row justify-content-around mb-4">
                <div className="w-25"><img src={travel.image} alt={travel.destination.city} /></div>
                <div className="w-50">
                    <h3 className="p-2 m-4 text-center">{travel.destination.city}</h3>
                    <div className="d-flex flex-row justify-content-between">
                        <h4 className="p-2 mb-3 text-center">{travel.start}</h4>
                        <h5 className="p-2 mb-3 text-center">{travel.duration}</h5>
                        <h4 className="p-2 mb-3 text-center">{travel.end}</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-between ">
                        <h4 className=" mb-4">costo</h4>
                        <Link to={`/travels/${travel.id}/travellers`}
                        className="btn btn-primary mb-4"
                        >Vedi tutti i viaggiatori</Link>
                    </div>
                </div>
            </div>
            <div>
                <p>{travel.description}</p>
                <div>
                    <h5>dettagli volo</h5>
                    <div>Compagnia: {flight.airline}</div>
                    <div>Numero Volo: {flight.flightNumber}</div>
                    <div>Partenza Aereoporto:  {flight.departureAirport}</div>
                    <div>Arrivo Aereoporto: {flight.arrivalAirport}</div>
                </div>
            </div>

        </div>
    )
}

// "airline": "EasyJet",
//       "flightNumber": "EJU2869",
//       "departureAirport": "Barcellona BCN",
//       "arrivalAirport": "Napoli NAP"

export default TravelDetailCard;
import { Link } from "react-router-dom";

const TravelCard = ({ travels }) => {

    return (
        <>
            {travels.map((travel) => (
                <div className="card d-flex flex-row justify-content-around mb-4" key={travel.id}>
                    <img className="img-fluid w-25 rounded " src={travel.image} alt="image" />
                    <div className="w-50">
                        <h3 className="p-2 m-4 text-center">Destinazione: {travel.destination.city}</h3>
                        <div className="d-flex flex-row justify-content-between">
                            <h4 className="p-2 mb-3 text-center">Inizio: {travel.start}</h4>
                            <h5 className="p-2 mb-3 text-center">{travel.duration} Giorni</h5>
                            <h4 className="p-2 mb-3 text-center">Fine: {travel.end}</h4>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <h4 className="mb-4">{travel.price}€</h4>
                            <button className="btn btn-primary mb-4"><Link to={`/travels/${travel.id}`}>dettagli</Link></button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TravelCard;
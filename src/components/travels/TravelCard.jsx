import { Link } from "react-router-dom";
import { format } from "date-fns";
import { it } from "date-fns/locale";

const TravelCard = ({ travels }) => {
    return (
        <>
            {travels.sort((a, b) => new Date(a.start) - new Date(b.start))
                .map((travel) => {
                    const formattedStart = format(new Date(travel.start), "d MMMM yyyy", { locale: it });
                    const formattedEnd = format(new Date(travel.end), "d MMMM yyyy", { locale: it });

                    return (
                        <div className="card d-flex flex-row justify-content-around mb-4 p-3" key={travel.id}>
                            <img className="rounded imagecard" src={travel.image} alt="image" />
                            <div className="w-50">
                                <h3 className="p-2 m-4 text-center">Destinazione: {travel.destination.city}</h3>
                                <div className="d-flex flex-row justify-content-between  mb-4 durata px-3">
                                    <h4 className="p-2 text-center">Inizio: {formattedStart}</h4>
                                    <h5 className="p-2 text-center">{travel.duration} Giorni</h5>
                                    <h4 className="p-2 text-center">Fine: {formattedEnd}</h4>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <h4 className={`mb-4 border rounded p-2 btn btn-success ${travel.discountPrice && "line-through"}`}>{travel.price}€</h4>
                                    {travel.discountPrice && <h4 className="mb-4 btn btn-danger">{travel.discountPrice}€</h4>}
                                    <Link to={`/travels/${travel.id}`} className="btn btn-primary mb-4">dettagli</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default TravelCard;

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
                        <div className="card travelcard d-flex flex-row justify-content-around mb-4 p-md-3 p-sm-1" key={travel.id}>
                            <img className="rounded imagecard" src={travel.image} alt="image" />
                            <div className="w-50">
                                <h3 className="p-2 m-4 text-center">Destinazione: {travel.destination.city}</h3>
                                <div className="d-flex flex-row justify-content-between  mb-4 durata px-3">
                                    <h4 className="p-2 text-center">Inizio: {formattedStart}</h4>
                                    <h5 className="p-2 text-center">{travel.duration} Giorni</h5>
                                    <h4 className="p-2 text-center">Fine: {formattedEnd}</h4>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <h4 className={`mb-4 p-2 px-3 price ${travel.discountPrice && "line-through"}`}>{travel.price}€</h4>
                                    {travel.discountPrice && <h4 className="mb-4 p-2 px-3 discount">{travel.discountPrice}€</h4>}
                                    <Link to={`/travels/${travel.id}`} className="btn btn-primary mb-4 p-2">Dettagli</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default TravelCard;

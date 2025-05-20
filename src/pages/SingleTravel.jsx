import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import OperatorCard from "../components/travels/OperatorCard";
import TravelDetailCard from "../components/travels/TravelDetailCard";
import EmergencyCard from "../components/travels/EmergencyCard";
import { useTravels } from "../contexts/TravelContext";

const SingleTravel = () => {
    const navigate = useNavigate();
    let { travelId } = useParams();
    travelId = parseInt(travelId);
    const {  operators, filteredTravels } = useTravels();

    const currentTravel = filteredTravels.find(travel => travel.id === travelId);
    const currentOperators = operators.filter(operator => operator.travelId === travelId);

    // Calcola se il viaggio è terminato
    const isTravelEnded = currentTravel.end && new Date(currentTravel.end) < new Date();

    useEffect(() => {
        if (!currentTravel) {
            navigate("/notfound");
        }
    }, [currentTravel, navigate]);

    return (
        <div>
            {currentTravel && <>
                <TravelDetailCard travel={currentTravel} />

                {!isTravelEnded && (
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mt-3">Operatori</h2>
                            <Link to={`/travels/${travelId}/travellers/newTraveller`} className="btn btn-primary">
                                aggiungi viaggiatore
                            </Link>
                        </div>

                        {currentOperators.map(operator => (
                            <OperatorCard operator={operator} key={operator.id} />
                        ))}
                    </div>
                )}
                {internationalSupport && <EmergencyCard travelId={travelId} />}
                
            </>}
        </div>
    );
}

export default SingleTravel;

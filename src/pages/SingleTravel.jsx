import { useParams, useNavigate } from "react-router-dom";
import OperatorCard from "../components/travels/OperatorCard";
import TravelDetailCard from "../components/travels/TravelDetailCard";
import { useTravels } from "../contexts/TravelContext"
import EmergencyCard from "../components/travels/EmergencyCard";
import { useEffect } from "react";

const SingleTravel = () => {
    const navigate = useNavigate();
    let { travelId } = useParams();
    travelId = parseInt(travelId);
    const { travels, operators } = useTravels()
    const currentTravel = travels.find(travel => travel.id === travelId);
    const currentOperators = operators.filter(operator => operator.travelId === travelId);


    useEffect(() => {
        if (!currentTravel) {
            navigate("/notfound");
        }
    }, [currentOperators, currentTravel, navigate])

    return (
        <div>
            {currentTravel && <>
                <TravelDetailCard travel={currentTravel} />
                <div>
                    <h2 className="mt-3">Operatori</h2>
                    {currentOperators.map(operator => {
                        return <OperatorCard operator={operator} key={operator.id} />
                    })}
                </div>
                <EmergencyCard travelId={travelId} />
            </>}
        </div>
    )
}

export default SingleTravel;
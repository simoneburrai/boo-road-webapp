import { useParams } from "react-router-dom";
import OperatorCard from "../components/travels/OperatorCard";
import TravelDetailCard from "../components/travels/travelDetailCard";
import {useTravels} from "../contexts/TravelContext"
import EmergencyCard from "../components/travels/EmergencyCard";

const SingleTravel = () => {
    let {id} = useParams();
    id = parseInt(id);
    const {travels, operators} = useTravels()
    const currentTravel = travels.find(travel => travel.id === id);
    const currentOperators = operators.filter(operator => operator.travelId === id);
    return (
        <div>
            <TravelDetailCard travel={currentTravel}/>
            <div>
                <h2>Operators</h2>
                {currentOperators.map(operator =>{
                return  <OperatorCard operator={operator} key={operator.id}/>
            })}
            </div>
            <EmergencyCard travelId={id}/>
        </div>
    )
}

export default SingleTravel;
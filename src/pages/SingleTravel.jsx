import { useParams } from "react-router-dom";
import OperatorCard from "../components/OperatorCard";
import TravelDetailCard from "../components/travelDetailCard";
import {useTravels} from "../contexts/TravelContext"

const SingleTravel = () => {
    let {id} = useParams();
    id = parseInt(id);
    const {travels, operators} = useTravels()
    const currentTravel = travels.find(travel => travel.id === id);
    const currentOperators = operators.filter(operator => operator.travelId === id);
    return (
        <div>
            <TravelDetailCard travel={currentTravel}/>
            {currentOperators.map(operator =>{
                return  <OperatorCard operator={operator}/>
            })}
           
        </div>
    )
}

export default SingleTravel;
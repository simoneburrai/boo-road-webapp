import { useParams } from "react-router-dom";
import OperatorCard from "../components/travels/OperatorCard";
import TravelDetailCard from "../components/travels/travelDetailCard";
import {useTravels} from "../contexts/TravelContext"
import EmergencyCard from "../components/travels/EmergencyCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SingleTravel = () => {
    let {id} = useParams();
    id = parseInt(id);
    const navigate = useNavigate();
    const {travels, operators} = useTravels()
    const currentTravel = travels.find(travel => travel.id === id);
    const currentOperators = operators.filter(operator => operator.travelId === id);

    useEffect(()=> {
        if(!currentTravel || currentOperators.length === 0){
            navigate("/notfound");
        }
    }, [currentOperators, currentTravel, navigate])
    return (
        <div>
            {currentTravel &&  <>
            <TravelDetailCard travel={currentTravel}/>
            <div>
                <h2>Operators</h2>
                {currentOperators.map(operator =>{
                return  <OperatorCard operator={operator} key={operator.id}/>
            })}
            </div>
            <EmergencyCard travelId={id}/>
        </>}
        </div>
    )
}

export default SingleTravel;
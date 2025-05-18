import { useParams } from "react-router-dom";
import OperatorCard from "../components/OperatorCard";
import TravelDetailCard from "../components/travelDetailCard";
import {useTravels} from "../contexts/TravelContext"

const SingleTravel = () => {
    let {id} = useParams();
    id = parseInt(id);
    const {travels} = useTravels()
    const currentTravel = travels.find(travel => travel.id === id);
    
    console.log(currentTravel);
    return (
        <div>
            <TravelDetailCard />
            <OperatorCard />
        </div>
    )
}

export default SingleTravel;
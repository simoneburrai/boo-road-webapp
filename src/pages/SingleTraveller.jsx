import { useParams } from "react-router-dom";
import {useTravels} from "../contexts/TravelContext"

const SingleTraveller = ()=> {
    const {travellers} = useTravels();
    let {id} = useParams();
    id = parseInt(id);
    const currentTraveller = travellers.find(traveller => traveller.id === id);
    return <div>
        <div>{currentTraveller.name}</div>
        <div>{currentTraveller.surname}</div>
        <div>{currentTraveller.number}</div>
        <div>{currentTraveller.email}</div>
        <div>{currentTraveller.nationality}</div>
        <div>{currentTraveller.idCode}</div>
        <div>{currentTraveller.emergencyNumber}</div>
    </div>
}

export default SingleTraveller;
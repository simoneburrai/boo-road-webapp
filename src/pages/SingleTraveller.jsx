import { useNavigate, useParams} from "react-router-dom";
import {useTravels} from "../contexts/TravelContext"
import { useEffect } from "react";

const SingleTraveller = ()=> {
    const navigate = useNavigate();
    const {travellers} = useTravels();
    let {id, travelId} = useParams();
    id = parseInt(id);
    travelId = parseInt(travelId)
    console.log(travelId, id);
    const currentTravellers = travellers.filter(traveller => traveller.travelId === travelId)
    const currentTraveller = currentTravellers.find(traveller => traveller.id === id);

   useEffect(() => {
    if (travellers.length > 0 && (!currentTraveller || currentTravellers.length === 0)) {
        navigate("/notfound");
    }
}, [travellers, currentTraveller, currentTravellers, navigate]);


    if(currentTraveller && currentTravellers.length > 0) {
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
  
}

export default SingleTraveller;
import { useParams, useNavigate } from "react-router-dom";
import {useTravels} from "../contexts/TravelContext"
import TravellerCard from "../components/travellers/TravellerCard"
import { useEffect } from "react";

const AllTravellers = ()=> {
    const navigate = useNavigate();
    let {travelId} = useParams();
    travelId = parseInt(travelId);
    const {travellers} = useTravels()
    const currentTravellers = travellers.filter(traveller => traveller.travelId === travelId)
    
    useEffect(()=> {
        if(currentTravellers.length === 0){
            navigate("/notfound");
        }
    }, [currentTravellers, navigate])

    if(currentTravellers){
        return <div>
         {currentTravellers.map(traveller =>{
            return <TravellerCard traveller={traveller} key={traveller.id}/>
        })}
    </div>
    }
}

export default AllTravellers;
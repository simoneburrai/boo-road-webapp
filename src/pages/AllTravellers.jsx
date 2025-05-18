import { useParams } from "react-router-dom";
import {useTravels} from "../contexts/TravelContext"
import TravellerCard from "../components/TravellerCard"

const AllTravellers = ()=> {
    let {id} = useParams();
    id = parseInt(id);
    const {travellers} = useTravels()
    const currentTravellers = travellers.filter(traveller => traveller.travelId === id)

    return <div>
        {currentTravellers.map(traveller =>{
            return <TravellerCard traveller={traveller}/>
        })}
    </div>
}

export default AllTravellers;
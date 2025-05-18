import {useTravels} from "../contexts/TravelContext"

const EmergencyCard = ({travelId})=> {
    const {emergencyContacts} = useTravels();
    const currentEmergency = emergencyContacts.filter(emergency => emergency.travelId === travelId);

    return <div></div>
}


export default EmergencyCard;
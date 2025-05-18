import {useTravels} from "../contexts/TravelContext"

const EmergencyCard = ({travelId})=> {
    const {emergencyContacts} = useTravels();
    console.log(emergencyContacts);
    const currentEmergency = emergencyContacts.filter(emergency => emergency.travelId === travelId);
    console.log(currentEmergency);
}


export default EmergencyCard;
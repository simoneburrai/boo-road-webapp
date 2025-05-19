import { useTravels } from "../../contexts/TravelContext"

const EmergencyCard = ({ travelId }) => {
    const { emergencyContacts } = useTravels();
    const currentEmergency = emergencyContacts.find(emergency => emergency.travelId === travelId);
    const internationalSupport = currentEmergency.internationalSupport;
    console.log(currentEmergency);
    return <div className="mb-5">
        <h5 className="mt-3">Per emergenze</h5>
        <div className="card p-3">
            <div><strong>Contatto: </strong>{currentEmergency.contactName}</div>
            <div><strong>Numero di telefono: </strong> {currentEmergency.phone}</div>
            <div><strong>Email:</strong> {currentEmergency.email}</div>
            <div className="fst-italic">{currentEmergency.location}</div>
            {internationalSupport && <div>
                <h6>International Support</h6>
                <div>
                    <div>Embassy:</div>
                    <div>{internationalSupport.embassy.name}</div>
                    <div>{internationalSupport.embassy.phone}</div>
                    <div>{internationalSupport.embassy.email}</div>
                    <div>{internationalSupport.embassy.address}</div>
                </div>
                <div>
                    <div>Emergency Numbers:</div>
                    <div>{internationalSupport.emergencyNumbers.police}</div>
                    <div>{internationalSupport.emergencyNumbers.ambulance}</div>
                </div>
            </div>}
        </div>
    </div>
}


export default EmergencyCard;

// "contactName": "Ayşe Demir",
// "phone": "+90 352 337 52 00",
// "email": "support.cappadocia@example.com",
// "location": "Centro Informazioni Turistiche, Göreme",
// "internationalSupport": {
// "embassy": {
// "name": "Ambasciata d'Italia ad Ankara",
// "phone": "+90 312 457 4200",
// "email": "ambasciata.ankara@esteri.it",
// "address": "Atatürk Bulvari No. 118, Kavaklidere, Ankara, Turchia"
// },
// "emergencyNumbers": {
// "police": "155",
// "ambulance": "112"
// }
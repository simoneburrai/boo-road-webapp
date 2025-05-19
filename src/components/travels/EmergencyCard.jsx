import { useTravels } from "../../contexts/TravelContext"

const EmergencyCard = ({ travelId }) => {
    const { emergencyContacts } = useTravels();
    const currentEmergency = emergencyContacts.find(emergency => emergency.travelId === travelId);
    const internationalSupport = currentEmergency.internationalSupport;
    console.log(currentEmergency);
    return <div className="mb-5">
        <h4 className="mt-3 mb-3 fw-bold">Per emergenze</h4>
        <div className="card p-3">
            <div>
                <strong><i className="fa-solid fa-user"></i> Contatto: </strong>{currentEmergency.contactName}
            </div>
            <div>
                <strong><i className="fa-solid fa-phone"></i> Numero di telefono: </strong> {currentEmergency.phone}
            </div>
            <div>
                <strong><i className="fa-solid fa-envelope"></i> Email:</strong> {currentEmergency.email}
            </div>
            <div className="fst-italic mb-3">{currentEmergency.location}</div>
            {internationalSupport && <div>
                <h5 className="fw-bold">Supporto Internazionale</h5>
                <div className="mb-3">
                    <div className="fw-bold">Ambasciata:</div>
                    <div>
                        <strong><i className="fa-solid fa-building"></i> Nome:</strong> {internationalSupport.embassy.name}
                    </div>
                    <div>
                        <strong><i className="fa-solid fa-phone"></i> Numero di telefono: </strong>{internationalSupport.embassy.phone}
                    </div>
                    <div>
                        <strong><i className="fa-solid fa-envelope"></i> Email: </strong>{internationalSupport.embassy.email}
                    </div>
                    <div>
                        <strong><i className="fa-solid fa-location-dot"></i> Indirizzo: </strong>{internationalSupport.embassy.address}
                    </div>
                </div>
                <div>
                    <div className="fw-bold fst-italic mb-2">Numeri di emergenza:</div>
                    <div>
                        <strong><i className="fa-solid fa-building-shield"></i> Polizia: </strong>{internationalSupport.emergencyNumbers.police}
                    </div>
                    <div>
                        <strong><i className="fa-solid fa-truck-medical"></i> Ambulanza: </strong>{internationalSupport.emergencyNumbers.ambulance}
                    </div>
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
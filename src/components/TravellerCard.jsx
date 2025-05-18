const TravellerCard = ({traveller}) => {
const {name, surname, number, nationality, emergencyNumber} = traveller;
    return (
        <div>
            <div>Nome: {name}</div>
            <div>Cognome: {surname}</div>
            <div>Numero di telefono: {number}</div>
            <div>Nazionalità: {nationality}</div>
            <div>Contatto di Emergenza: {emergencyNumber}</div>
        </div>
    )
}

export default TravellerCard;


// "travelId": 17,
// "name": "Jessica",
// "surname": "Wilson",
// "number": "525.601.2309",
// "nationality": "Norfolk Island",
// "emergencyNumber": "+1-910-139-9161"
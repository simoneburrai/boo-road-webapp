const OperatorCard = ({operator}) => {
const {name, surname, email, number} = operator;
    return (

        <div className="card ">
            <div className="w-50">
                <div className="">Nome: {name}</div>
                <div>Cognome: {surname}</div>
                <div>Numero di telefono: {number} </div>
                <div>Email: {email}</div>
            </div>
        </div>
    )
}

export default OperatorCard;
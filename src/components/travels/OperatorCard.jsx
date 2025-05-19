const OperatorCard = ({ operator }) => {
    const { name, surname, email, number } = operator;
    return (

        <div className="card mb-3 mt-3 p-3">
            <div className="w-md-50">
                <div className=""><strong>Nome:</strong> {name}</div>
                <div><strong>Cognome:</strong> {surname}</div>
                <div><strong>Numero di telefono:</strong> {number} </div>
                <div><strong>Email: </strong>{email}</div>
            </div>
        </div>
    )
}

export default OperatorCard;
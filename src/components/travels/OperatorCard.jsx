const OperatorCard = ({ operator }) => {
    const { name, surname, email, number } = operator;
    return (

        <div className="card mb-3 mt-3 p-3">
            <div className="w-md-50">
                <div className=""><strong><i className="fa-solid fa-user"></i> Nome:</strong> {name}</div>
                <div><strong><i className="fa-solid fa-user"></i> Cognome:</strong> {surname}</div>
                <div><strong><i className="fa-solid fa-phone"></i> Numero di telefono:</strong> {number} </div>
                <div><strong><i className="fa-solid fa-envelope"></i> Email: </strong>{email}</div>
            </div>
        </div>
    )
}

export default OperatorCard;
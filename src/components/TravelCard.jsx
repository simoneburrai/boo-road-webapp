const TravelCard = () => {

    return (
        <div className="card d-flex flex-row justify-content-around">
            <div>immagine</div>
            <div>
                <h3>destinazione</h3>
                <div className="d-flex flex-row">
                    <h4>data inizio</h4>
                    <h4>data fine</h4>
                </div>
                <div className="d-flex flex-row">
                    <h4>costo</h4>
                    <button>dettagli</button>
                </div>

            </div>
        </div>
    )
}

export default TravelCard;
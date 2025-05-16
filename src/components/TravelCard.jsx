const TravelCard = () => {

    return (
        <div className="card d-flex flex-row justify-content-around mb-4">
            <div className="w-25">immagine</div>
            <div className="w-50">
                <h3 className="p-2 m-4 text-center">destinazione</h3>
                <div className="d-flex flex-row justify-content-between">
                    <h4 className="p-2 mb-3 text-center">data inizio</h4>
                    <h5 className="p-2 mb-3 text-center">durata</h5>
                    <h4 className="p-2 mb-3 text-center">data fine</h4>
                </div>
                <div className="d-flex flex-row justify-content-between ">
                    <h4 className=" mb-4">costo</h4>
                    <button className="btn btn-primary mb-4">dettagli</button>
                </div>

            </div>
        </div>
    )
}

export default TravelCard;
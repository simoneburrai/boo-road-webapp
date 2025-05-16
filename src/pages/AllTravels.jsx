import TravelCard from "../components/TravelCard";
import SearchBarTravel from "../components/SearchBarTravel";

const AllTravels = () => {
    return (
        <div>
            <div className="d-flex flex-row my-5 justify-content-between mx-4">
                <h2 className="text-center text-light">naviga tra tutti i nostri viaggi!</h2>
                <SearchBarTravel />
            </div>
            <TravelCard />
        </div>
    )
}

export default AllTravels;
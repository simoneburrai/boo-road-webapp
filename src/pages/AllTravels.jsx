import TravelCard from "../components/TravelCard";
import SearchBarTravel from "../components/SearchBarTravel";

const AllTravels = () => {
    return (
        <div>
            <div>
                <h2 className="my-5 text-center">naviga tra tutti i nostri viaggi!</h2>
                <SearchBarTravel />
            </div>
            <TravelCard />
        </div>
    )
}

export default AllTravels;
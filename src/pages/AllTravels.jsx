import TravelCard from "../components/TravelCard";
import SearchBarTravel from "../components/SearchBarTravel";

const AllTravels = () => {
    return (
        <div>
            <h2 className="my-5 text-center">naviga tra tutti i nostri viaggi!</h2>
            <SearchBarTravel />
            <TravelCard />
        </div>
    )
}

export default AllTravels;
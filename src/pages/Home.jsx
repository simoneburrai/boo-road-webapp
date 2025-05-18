import TravelCard from "../components/TravelCard";
import travels from "../data/travels";
import filteredSortedTravels from "../utils/filteredDateTravels";

const months = 2;
const filteredTravelsforDate = filteredSortedTravels(travels, months)
console.log(filteredTravelsforDate);

const Home = () => {
    return (
        <>
            <h2 className="my-5 text-center text-light">Scopri i nostri prossimi viaggi!</h2>
            <TravelCard travels={filteredTravelsforDate} />
        </>
    )
}

export default Home;
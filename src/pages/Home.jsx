import TravelCard from "../components/travels/TravelCard";
import filteredSortedTravels from "../utils/filteredDateTravels";
import { useTravels } from "../contexts/TravelContext"


const Home = () => {
    const { filteredTravels } = useTravels()
    const nextMonths = 2;
    const filteredTravelsforDate = filteredSortedTravels(filteredTravels, nextMonths)


    return (
        <>
            <h2 className="mb-3 mb-md-5 fs-1 text-center">Viaggi in partenza</h2>
            <TravelCard travels={filteredTravelsforDate} />
        </>
    )
}

export default Home;
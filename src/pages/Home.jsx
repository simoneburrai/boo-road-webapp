import TravelCard from "../components/travels/TravelCard";
import filteredSortedTravels from "../utils/filteredDateTravels";
import { useTravels } from "../contexts/TravelContext"


const Home = () => {
    const { travels } = useTravels()
    const nextMonths = 2;
    const filteredTravelsforDate = filteredSortedTravels(travels, nextMonths)


    return (
        <>
            <h2 className="my-5 text-center">Scopri i nostri prossimi viaggi!</h2>
            <TravelCard travels={filteredTravelsforDate} />
        </>
    )
}

export default Home;
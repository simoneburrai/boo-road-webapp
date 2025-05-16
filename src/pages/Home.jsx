import TravelCard from "../components/TravelCard";
import travels from "../data/travels";

const Home = () => {
    return (
        <>
            <h2 className="my-5 text-center text-light">Scopri i nostri prossimi viaggi!</h2>
            <TravelCard travels={travels} />
        </>
    )
}

export default Home;
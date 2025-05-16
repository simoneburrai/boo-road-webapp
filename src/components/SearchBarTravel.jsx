import travels from "../data/travels";
import { useState, useEffect, } from "react";

const SearchBarTravel = () => {

    //destructuring the travels object
    const { destination } = travels;

    //useState to set the initial travels
    const [destinationList, setDestinationList] = useState(destination);

    //useState to set the search value
    const [searchTravel, setSearchTravel] = useState("");

    useEffect(() => {
        let destinationTravels = destinationList;

        //filter the travels based on the search value
        if (searchTravel !== "") {
            destinationTravels = destinationTravels.filter((destination) => destination.city.toLowerCase().includes(searchTravel.toLowerCase()));
        }

        //set the travels list to the filtered travels
        setDestinationList(destinationTravels);

    }, [searchTravel]);

    function handleChange(e) {
        //set the search value to the input value
        setSearchTravel(e.target.value);
    }


    return (
        <input type="text" placeholder="Cerca viaggio" value={searchTravel} onChange={handleChange} />
    )
}

export default SearchBarTravel;
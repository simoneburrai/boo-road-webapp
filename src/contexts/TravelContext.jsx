import { createContext, useContext, useState } from "react";
import travels from "../data/travels";
import operators from "../data/operators"
import travellers from "../data/travellers"
import emergencyContacts from "../data/emergyContacts";

const TravelContext = createContext();

const TravelProvider = ({ children }) => {

    const [filteredTravels, setFilteredTravels] = useState(travels);
    const [filteredTravellers, setFilteredTravellers] = useState(travellers);
    return <TravelContext.Provider value={{ travels, operators, travellers, emergencyContacts, filteredTravels, setFilteredTravels, filteredTravellers, setFilteredTravellers }}>
        {children}
    </TravelContext.Provider>
}

const useTravels = () => {
    return useContext(TravelContext);
};

const useTravellers = () => {
    return useContext(TravelContext);
};

export {
    useTravels,
    useTravellers,
    TravelProvider
}
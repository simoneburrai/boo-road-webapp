import { createContext, useContext } from "react";
import travels from "../data/travels";
import operators from "../data/operators"
import travellers from "../data/travellers"

const TravelContext = createContext();

const TravelProvider = ({children}) => {

    return <TravelContext.Provider value={{travels, operators, travellers}}>
        {children}
    </TravelContext.Provider>
}

const useTravels = () => {
  return useContext(TravelContext);
};

export {
    useTravels,
    TravelProvider
}
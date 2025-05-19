import { Routes, BrowserRouter, Route } from "react-router-dom"
import MainDefault from "./defaults/MainDefault"
import Home from "./pages/Home"
import AllTravels from "./pages/AllTravels"
import SingleTravel from "./pages/SingleTravel"
import AllTravellers from "./pages/AllTravellers"
import SingleTraveller from "./pages/SingleTraveller"
import Contacts from "./pages/Contacts"
import { TravelProvider } from "./contexts/TravelContext"
import NotFound from "./pages/NotFound"
import NewTravel from "./pages/NewTravel"

function App() {
  return (
    <TravelProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainDefault />}>
            <Route path="/" element={<Home />} />
            <Route path="/travels" element={<AllTravels />} />
            <Route path="/travels/:travelId" element={<SingleTravel />}></Route>
            <Route path="/travels/:travelId/travellers" element={<AllTravellers />}></Route>
            <Route path="/travels/:travelId/travellers/:id" element={<SingleTraveller />}></Route>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/newTravel" element={<NewTravel />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TravelProvider>
  )
}

export default App

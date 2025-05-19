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
<<<<<<< HEAD
import NewTravel from "./pages/NewTravel"
=======
import NewTraveller from "./pages/NewTraveller"
>>>>>>> 3452601f60f90e75c623e67216f3cf866733c957

function App() {
  return (
    <TravelProvider>
<<<<<<< HEAD
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
=======
    <BrowserRouter>
    <Routes>
      <Route element={<MainDefault/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/travels" element={<AllTravels/>}/>
        <Route path="/travels/:travelId" element={<SingleTravel/>}></Route>
         <Route path="/travels/:travelId/newtraveller" element={<NewTraveller/>}></Route>
        <Route path="/travels/:travelId/travellers" element={<AllTravellers/>}></Route>
        <Route path="/travels/:travelId/travellers/:id" element={<SingleTraveller/>}></Route>
        <Route path="/contacts" element={<Contacts/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
>>>>>>> 3452601f60f90e75c623e67216f3cf866733c957
    </TravelProvider>
  )
}

export default App

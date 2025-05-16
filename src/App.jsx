import { Routes, BrowserRouter, Route } from "react-router-dom"
import MainDefault from "./defaults/MainDefault"
import Home from "./pages/Home"
import AllTravels from "./pages/AllTravels"
import SingleTravel from "./pages/SingleTravel"
import AllTravellers from "./pages/AllTravellers"
import SingleTraveller from "./pages/SingleTraveller"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainDefault/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/travels" element={<AllTravels/>}/>
        <Route path="/travels/:id" element={<SingleTravel/>}></Route>
        <Route path="/travels/:id/travellers" element={<AllTravellers/>}></Route>
        <Route path="/travels/:id/travellers/:id" element={<SingleTraveller/>}></Route>
        <Route path="/contacts" element={<Contacts/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import FlightSearch from "./pages/FlightSearch";
import FlightDetails from "./pages/FlightDetails";
import SavedFlights from "./pages/SavedFlights";
import Pickups from "./pages/Pickups";
import DistanceTracker from "./pages/DistanceTracker";
import FlightTrackNavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <FlightTrackNavBar />
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/flight/:id" element={<FlightDetails />} />
        <Route path="/my-flights" element={<SavedFlights />} />
        <Route path="/my-pickups" element={<Pickups />} />
        <Route path="/gate-timer" element={<DistanceTracker />} />
      </Routes>
    </>
  );
}

export default App;

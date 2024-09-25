import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/episodes";
import Locations from "./pages/locations";
import CardDetails from "./components/Cards/CardDetails";
import Characters from "./pages/characters";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

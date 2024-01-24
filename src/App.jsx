import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "@components";
import LandingPage from "@pages/landing";
import CalculatorPage from "@pages/calculator";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/calculator" element={<CalculatorPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

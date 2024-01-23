import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "@components";
import LandingPage from "@pages/landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

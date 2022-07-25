import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={null}></Route>
        <Route exact path="*" element={<Header />}></Route>
      </Routes>
      <main className="px-5" py-3>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
        </Routes>
      </main>
      <Routes>
        <Route exact path="/" element={null}></Route>
        <Route exact path="*" element={<Footer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

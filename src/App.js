import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cards />
      <Showcase />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

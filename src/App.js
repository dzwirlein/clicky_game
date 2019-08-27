import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Maincontainer from "./components/MainContainer/Index";
import pictures from "./pictures.json"

class App extends component {
  state = {
    pictures
  }
}


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Maincontainer/>
      <Footer />
    </div>
  );
}

export default App;
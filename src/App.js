import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Maincontainer from "./components/MainContainer/Index";
import pictures from "./pictures.json"
import Wrapper from "./Wrapper"

class App extends Component {
  state = {
    pictures
  };



render() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
      {this.state.pictures.map(picture =>(
      <Maincontainer
      id={picture.id}
      key={picture.id}
      name={picture.name}
      image={picture.image}
      />
      ))}
      </Wrapper>
      <Footer />
    </div>
  );
}

}

export default App;
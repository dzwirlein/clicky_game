import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Maincontainer from "./components/MainContainer/Index";
import pictures from "./pictures.json"
import Wrapper from "./Wrapper"

class App extends Component {
  state = {
    pictures,
    score: 0,
    topscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.topscore);
      });
    }
    this.state.pictures.forEach(picture => {
      picture.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.pictures.find((o, i) => {
      if (o.id === id) {
        if(pictures[i].count === 0){
          pictures[i].count = pictures[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.pictures.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }



render() {
  return (
    <div>
      <Navbar score={this.state.score} topscore={this.state.highscore}/>
      <Jumbotron />
      <Wrapper>
      {this.state.pictures.map(picture =>(
      <Maincontainer
      clickCount={this.clickCount}
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
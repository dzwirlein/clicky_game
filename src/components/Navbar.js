import React from "react";

const styles = {
  navbar: {
    color: "white",
    background: "black"
  },
};

function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={styles.navbar}>
      <div className="container">
      <a className="navbar-brand" href="/" style={styles.navbar}>
        Clicky Game
      </a>
          <span className="text-center font-weight-normal" style={styles.navbar}>
              Click an image to begin
          </span>
          <span className="navbar-text text-right" style={styles.navbar}>
            Score: {props.score} | Top Score: {props.topscore}
          </span>
          </div>
        </nav>
      
  );
}

export default Navbar;
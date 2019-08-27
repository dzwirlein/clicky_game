import React from "react";

const styles = {
  navbar: {
    color: "white"
  },
};

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
          <span className="text-center font-weight-normal" style={styles.navbar}>
              Click an image to begin
          </span>
          <span className="navbar-text text-right" style={styles.navbar}>
            Score: 0 | Top Score: 0 
          </span>
          </div>
        </nav>
      
  );
}

export default Navbar;
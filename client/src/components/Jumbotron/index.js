//this code creates the Jumbotron in the user view

//import react (or else it won't work!)
import React from "react";
import "./style.css";

//Jumbotron helper function. Also exports code so that other files can access
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

//export code so that other files can access
export default Jumbotron;
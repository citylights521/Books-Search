//this code creates the footer in the user view
//populates in the user view on the front-end (UI)

// import react (or else it won't work!)
import React from "react";

//Footer function generates a footer in the user view
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

//Export Footer so that other files can reference the code
export default Footer;

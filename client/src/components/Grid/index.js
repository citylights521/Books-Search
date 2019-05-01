//this code is helper methods for generating bootstrap Grid HTML/JSX
//populates in the user view on the front-end (UI)

// import react (or else it won't work!)
import React from "react";

//Helper Function to export a bootstrap Container 
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//Helper Function to export a bootstrap Row
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//Helper Function to export a bootstrap Column
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}

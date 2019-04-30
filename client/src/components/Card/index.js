//this code creates Cards in the user view

//import react (or else it won't work)
import React from "react";

//Card function for the bootstrap card
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
{/* i tag italicizes */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

//Exports Card so that other files can access the code
export default Card;

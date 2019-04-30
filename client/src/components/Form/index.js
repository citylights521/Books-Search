//this code creates the Form for taking in user input to change the state

// import react (or else it won't work!)
import React from "react";

//General Form function takes in user input on the front-end
//Utilizes q for queries, and callbacks for change and submit
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
{/* user search input field  */}
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="The Nightingale"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
{/* Search button code */}
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-light float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

//export code so that other files can access the above
export default Form;

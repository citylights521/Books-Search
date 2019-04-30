//this code is the main entry point for the react client app

//import react (or else it won't work!)
import React from "react";

//import additional component files
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

//main App function 
function App() {
  return (
  // Used for handling routes
    <Router>
  {/* body/wrapper div */}
      <div>
        <Nav />
        <Switch>
{/* index page route to the homepage */}
          <Route exact path="/" component={Home} />
{/* index page route to the saved books page */}
          <Route exact path="/saved" component={Saved} />
{/* index page route to the 404 error page */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

//export App code so that other files can reference 
export default App;

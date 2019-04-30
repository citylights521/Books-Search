//this code creates the users list view

//have to import react (or else it won't work!)
import React from "react";
//import styling css for the list view
import "./style.css";

// This component exports both the List and ListItem components
//exports List
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

//export helper function for the ListItem
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

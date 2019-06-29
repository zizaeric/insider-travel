import React from "../../../node_modules/react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 170, clear: "both", paddingTop: 90, textAlign: "center" , backgroundColor: "#40ba65"}}
      className="jumbotron" 
    >
      {children}
    </div>
  );
}

export default Jumbotron;

import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 170, clear: "both", paddingTop: 90, textAlign: "center" , backgroundColor: "#7cc4c9"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

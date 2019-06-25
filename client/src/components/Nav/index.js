import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
  
    <nav>
      <ul id="main">
      <Link to="/"><li>Home</li></Link>
        <Link to="/result"><li>Search</li></Link>
        <Link to="/feedbacks"> <li>Feedback</li></Link>
        
      </ul>
    </nav>
  );
}

export default Nav;

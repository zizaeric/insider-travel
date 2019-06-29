import React from "../../../node_modules/react";
import { Link } from "../../../node_modules/react-router-dom";

function Nav() {
  return (
  
    <nav class="button hvr-grow">
      
      <ul id="main">
      <Link to="/"><li>Home</li></Link>
        <Link to="/result"><li>Search</li></Link>
        <Link to="/feedbacks"> <li>Feedback</li></Link>
        
      </ul>
    </nav>
  );
}

export default Nav;

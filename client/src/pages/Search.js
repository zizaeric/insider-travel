import React, { Component } from "../../node_modules/react";
import { Link } from "../../node_modules/react-router-dom";
import logo from '../img/logo.png'


//Landing Page
class Search extends Component{
  

  render () {
     
    return (

      <div id="wrapper2">
  
  <img src={logo} />
      
      <Link to="/result"> <p id="slogan" href="/"><span>Search</span> at a budget <span>here</span>.</p> </Link>
    </div>
    

    );
  }
};

export default Search;

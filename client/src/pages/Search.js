import React, { Component } from "react";
import { Link } from "react-router-dom";



//Landing Page
class Search extends Component{
  render () {
     
    return (

      <div id="wrapper2">
  
      
      <p id="title"  spellcheck="false"><span>Budget</span><span>Travel</span><span>!</span></p>
      <Link to="/result"> <p id="slogan" href="/"><span>Search</span> at a budget <span>here</span>.</p> </Link>
    </div>
    


    );
  }
};

export default Search;

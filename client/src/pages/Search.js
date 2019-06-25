import React, { Component } from "react";



// import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
// // import { Redirect } from 'react-router-dom';
// // import axios from 'axios';
// import { Container } from "../components/Grid";
// // import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component{
  render () {
     
    return (

      <div id="wrapper2">
  
      {/* <p id="stars"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p> */}
      <p id="title"  spellcheck="false"><span>Budget</span><span>Travel</span><span>!</span></p>
      <Link to="/result"> <p id="slogan" href="/"><span>Search</span> at a budget <span>here</span>.</p> </Link>
    </div>
    


    );
  }
};

export default Search;

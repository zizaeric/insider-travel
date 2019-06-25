import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Result extends Component {
  state = {
    feedbacks: [],
    name: "",
    city: "",
    info: ""
  };


  componentDidMount() {
    this.loadFeedbacks();
  }

 

  loadFeedbacks = () => {
    API.getFeedbacks()
    
      .then(res =>
        this.setState({ feedbacks: res.data,  name: "", city: "", info: "" })
     ) 
      .catch(err => console.log(err));
  };
  
  // deleteFeedback = id => {
  //   API.deleteFeedback(id)
  //     .then(res => this.loadFeedbacks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.city) {
      API.saveFeedback({
        // _id:this.state._id,
        name: this.state.name,
        city: this.state.city,
        info: this.state.info
      })
        .then(res => this.loadFeedbacks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
       
            <Jumbotron>
              <h1>Ready to take a trip?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="What country you want to go to? (Required)"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="How much you want to spend? (Required)"
              />
            
              <FormBtn
                disabled={!(this.state.city && this.state.name && this.state.info)}
                onClick={this.handleFormSubmit}
              >
                Submit 
              </FormBtn>

              
            </form>
        
      </Container>
    );
  }
}

export default Result;

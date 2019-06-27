import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


//Feedback GET and Post from feedback db
class Feedbacks extends Component {
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
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Feedback Do You Have?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="What is your name? (Required)"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="What city are you from? (Required)"
              />
              <TextArea
                value={this.state.info}
                onChange={this.handleInputChange}
                name="info"
                placeholder="What do you think about us? (Required)"
              />
              <FormBtn
                disabled={!(this.state.city && this.state.name && this.state.info)}
                onClick={this.handleFormSubmit}
              >
                Submit 
              </FormBtn>

              
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>What Others Think!</h1>
            </Jumbotron>
            {this.state.feedbacks.length ? (
              <List>
                {this.state.feedbacks.map(feedback => (
                  <ListItem key={feedback._id}>
                    <Link to={"/feedbacks/" + feedback._id}>
                      <strong>
                        {feedback.name} from {feedback.city}
                      </strong>
                    </Link>
            
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Feedbacks;

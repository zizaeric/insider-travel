import React, { Component } from "../../node_modules/react";
import { Link } from "../../node_modules/react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    feedback: {}
  };
  // When this component mounts, grab the feedback with the _id of this.props.match.params.id
  // e.g. localhost:3000/feedback/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getFeedback(this.props.match.params.id)
      .then(res => this.setState({ feedback: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.feedback.name} from {this.state.feedback.city}
              </h1>

              <h3>{this.state.feedback.info}</h3>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/feedbacks">← Back to Feedback Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;

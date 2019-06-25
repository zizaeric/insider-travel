import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feedbacks from "./pages/Feedbacks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import './css/App.scss'



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/feedbacks" component={Feedbacks} />
          <Route exact path="/feedbacks/:id" component={Detail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/result" component={Result} />
          <Route component={NoMatch} />
          
        </Switch>
        
        {/* <img src={require('../src/img/cloud-footer2.gif')} alt="Max-width 25%"  /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

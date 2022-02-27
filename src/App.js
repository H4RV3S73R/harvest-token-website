import React, { Component, BrowserRouter as Router, Route, Switch } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { Footer } from "./components/Footer"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

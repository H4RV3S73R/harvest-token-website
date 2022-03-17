import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './components/Layout';
import { Footer } from "./components/Footer";
import { NoMatch } from "./NoMatch"
import { NavigationBar } from './components/NavigationBar';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<NoMatch />} />
            </Routes>
            <Footer />
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
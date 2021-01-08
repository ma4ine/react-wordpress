import React from 'react';
import Home from './components/Home';
import { Router } from "@reach/router";
import './App.css';
import SinglePost from './components/SinglePost';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <SinglePost path="/post/:id" />
        </Router>
      </div>
    )
  }
}

export default App
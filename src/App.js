import React from 'react';
import Home from './components/Home';
import { Router } from "@reach/router";
import './App.css';
import SinglePost from './components/SinglePost';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreatePost from './components/dashboard/posts/CreatePost';
import AppProvider from './components/context/AppProvider';
import Posts from './components/dashboard/posts/Posts';

export class App extends React.Component {

  render() {
    return (
      <AppProvider>
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Dashboard path="/dashboard" />
          <Posts path="/dashboard/posts" />
          <CreatePost path="/dashboard/create-post" />
          <Posts path="/dashboard/pages" />
          <SinglePost path="/post/:id" />
        </Router>
      </AppProvider>
    )
  }
}

export default App
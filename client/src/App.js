// import logo from './logo.svg';
import React from'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import {AuthProvider} from './context/auth'

import MenuBar from './Components/MenuBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SinglePost from './Pages/SinglePost';


function App() {
  return (
      <AuthProvider>
        <Router>         
            <Container>
              <MenuBar/>
              <Route exact path='/' component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
             <Route exact path="/posts/:postId" component={SinglePost}/>
            </Container>
      </Router>
      </AuthProvider>
  );
}

export default App;


     /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
     // <div><h1>Welcome to Social Media App</h1></div> only one out by return
     // <Container> has <div container...></div> in itself so no need to explicitly write it as that won't work

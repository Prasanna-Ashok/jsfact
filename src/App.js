import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Enroll from './components/Enroll';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
      <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/courses' component={Courses}/>
      <Route path='/enroll' component={Enroll} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' Component={Contact} />
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
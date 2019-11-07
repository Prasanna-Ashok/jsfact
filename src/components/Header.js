import React, { Component } from 'react';
import '../styles/main_styles.css';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="header_content d-flex flex-row align-items-center justify-content-start">
                    <div className="logo_container">
                      <Link to='/'>
                        <div className="logo_text">JS<span>Factory</span></div>
                      </Link>
                    </div>
                    <nav className="main_nav_container ml-auto">
                      <ul className="main_nav">
                        <li ><Link to='/'>Home</Link></li>
                        <li ><Link to='/about'>About Us</Link></li>
                        <div className="dropdown">
                        <button className="dropbtn">Courses<i className="fa fa-angle-down" style={{fontSize:20}}></i></button>
                        <div className="dropdown-content">
                          <a href = '/courses?type=node' >Node Js </a>
                          <a href = '/courses?type=react'>React Js </a>
                          <a href = '/courses?type=angular'>Angular Js</a>    
                        </div>
                      </div>
                        <li ><Link to='/contact'>Contact</Link></li>
                        <li><a href="http://localhost:8080/auth/google"> Sign in with <i className="fa fa-google-plus" style={{ fontSize: 20 }}></i> </a></li>
    
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return state;
}


export default withRouter(connect(mapStateToProps)(Header));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NavBar extends Component {

render() {
	return (
		<div className="container container-nav">
        
          <nav className="navbar navbar-toggleable-md navbar-inverse navbar-fixed-top bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Navigation</a>
              <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">Posts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutme">About me</Link>
                </li>
              </ul>
              </div>
          </nav>
      	</div> 

		);
	};
}

export default NavBar;

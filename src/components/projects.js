import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import ProjectsList from './projects_list'

class Projects extends Component {

  render() {

  
    return (
      
      <div className="projects">
      	<div className="projects-title">
      		<h1>Projects</h1>
      	</div>
      	<div className="projects-contacts">
      		Here will be all the different social media contact glyphicons
      	</div>

      	<ProjectsList />

      </div>
    );
  }
}

export default Projects;
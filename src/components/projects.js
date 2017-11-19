import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class Projects extends Component {

  componentWillMount(){
    this.props.fetchProjects();
  }

  renderProjects(){
      return this.props.projects.map(project => {
        return(
            <div className="project" key={project.id}>
              <div className="project-pic">
                <img src="../img/programming.jpg" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

            </div>
          );
      });

  }


  render() {

  
    return (
      
      <div className="projects">
      	<div className="projects-title">
      		<h1>Projects</h1>
      	</div>
      	<div className="projects-contacts">
      		Here will be all the different social media contact glyphicons
      	</div>

      	<div className="projects-area">
            
          {this.renderProjects()}

            
      	</div>
      	
      </div>
    );
  }
}

function mapStateToProps(state){
  return { projects: state.contents.projects };
}

export default connect(mapStateToProps, actions)(Projects);
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router";

class ProjectsList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return this.props.projects.map(project => {
      return (
        <div className="card col-md-4 col-sm-12 col-12" key={project.id}>
          <img src="../img/programming.jpg" alt="Card image cap" />
          <p className="card-text">
            <h3>
              {project.title}
            </h3>
            {project.description}
            
          </p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="projects-area">
        {this.renderProjects()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.contents.projects };
}

export default connect(mapStateToProps, actions)(ProjectsList);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AboutMe extends Component {
  render() {
    return (
      <div className="container container-full-page">
        <h3>About me</h3>
        <div className="row">
          <div className="card col-md-4 col-sm-12 col-12">
            <img src="img/programming.jpg" alt="Card image cap" />
          </div>
          <div className="col-md-8 col-sm-12 col-12">
            <p className="card-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;

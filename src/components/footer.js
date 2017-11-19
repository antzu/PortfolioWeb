import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<footer className="text-muted">
					<div className="container">
						<p className="float-right">
							<a href="#">Back to top</a>
						</p>
						<p>Site is created by &copy; Andres Aava</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;

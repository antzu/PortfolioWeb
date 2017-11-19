import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router";
import ChatItem from "./chat_item";

class Chat extends Component {
	state = { post: "" };

	componentWillMount() {
		this.props.fetchChatPosts();
	}

	handleInputChange(e) {
		this.setState({ post: e.target.value });
	}

	handleFormSubmit(e) {
		e.preventDefault();
		this.props.createChatPost(this.state.post);
	}
	renderPosts() {
		return _.map(this.props.chat, (post, key) => {
			return <ChatItem key={key} chatPost={post} id={key} />;
		});
	}

	render() {
		return (
			<div className="container">
				<h4>Leave a message</h4>
				<div className="">
					<ul className="list-group">
						{this.renderPosts()}
					</ul>
				</div>
				<div className="">
					<form
						onSubmit={this.handleFormSubmit.bind(this)}
						className="form-inline"
					>
						<div className="form-group">
							<input
								className="form-control"
								placeholder="Add a post"
								value={this.state.post}
								onChange={this.handleInputChange.bind(this)}
							/>
							<button action="submit" className="btn btn-primary">
								Create Post
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { chat: state.chat };
}

export default connect(mapStateToProps, actions)(Chat);

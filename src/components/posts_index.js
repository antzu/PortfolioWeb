import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import PostsShow from "./posts_show";

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`posts/${post.id}`}>
						{post.title}
					</Link>
				</li>
			);
		});
	}

	renderFullPosts() {
		var array = this.props.posts;
		return _.map(array, post => {
			return (
				<div key={post.id}>
					<h4>
						{post.title}
					</h4>
					<h6>
						{post.categories}
					</h6>
					<p>
						{post.content}
					</p>
					<hr />
				</div>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div
						className="container-full-page col-md-8 md-down"
						id="posts"
					>
						<h3>Latest posts</h3>

						{this.renderFullPosts()}
					</div>
					<div className="container-full-page col-md-4 col-sm-12 col-12">
						<div className="text-right">
							<Link className="btn btn-primary" to="/posts/new">
								Add a post
							</Link>
						</div>
						<div className="col-md-4">
							<h3>Posts</h3>
						</div>
						<ul className="list-group">
							{this.renderPosts()}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

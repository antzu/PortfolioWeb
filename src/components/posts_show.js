import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push("/posts");
		});
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return <div>Loading....</div>;
		}

		return (
			<div className="container">
				<div className="text-left">
					<Link to="/posts">Back to posts</Link>
				</div>
				<div className="text-right">
					<button
						className="btn btn-danger"
						onClick={this.onDeleteClick.bind(this)}
					>
						Delete post
					</button>
				</div>
				<h3>
					{post.title}
				</h3>
				<h6>
					{post.categories}
				</h6>
				<p>
					{post.content}
				</p>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

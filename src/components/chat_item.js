import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router";

class ChatItem extends Component {
  handleClick() {
    this.props.deleteChatPost(this.props.id);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.chatPost}
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(ChatItem);

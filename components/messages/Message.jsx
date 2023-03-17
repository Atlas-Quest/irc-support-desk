import React, { Component } from "react";
import PropTypes from "prop-types";
import fecha from 'fecha';

class Message extends Component {
  render() {
    // TODO: change date format package
    let {message} = this.props;
    let createdAt = fecha.format(new Date(message.createdAt), "hh:mm:ss MM/DD/YYYY");
    return (
      <li className="message">
        <div className="author">
          <strong>{message.author}</strong>
          <i className="timestamp">{createdAt}</i>
        </div>
        <div className="body">{message.body}</div>
      </li>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;

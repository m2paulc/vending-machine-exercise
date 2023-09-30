import {Component} from "react";
import PropTypes from 'prop-types';
import "./Message.css";

class Message extends Component {
  render() {
    return <div className='Message'>{this.props.children}</div>;
  }
}

Message.propTypes = {
  children: PropTypes.node.isRequired
};

export default Message;

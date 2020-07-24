import React from "react";
import message from "../App.css";

export default class Message extends React.PureComponent {
  render() {
    return <p style={ message }> {this.props.message} </p>;
  }
}

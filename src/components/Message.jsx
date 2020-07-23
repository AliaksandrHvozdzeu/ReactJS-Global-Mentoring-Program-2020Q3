import React from "react";

export default class Message extends React.PureComponent {
  render() {
    return (
      <>
        <p style={style}> {this.props.message} </p>
      </>
    );
  }
}

const style = {
  color: "#000",
  margin: "10px",
  fontFamily: "Arial"
};

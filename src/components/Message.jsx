import React, { PureComponent } from "react"

class Message extends PureComponent {
    render() {
        return <p style={{ margin: "10px" }}> {this.props.message} </p>
    }
}

export default Message;

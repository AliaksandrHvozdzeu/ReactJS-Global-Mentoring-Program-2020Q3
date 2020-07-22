import React, {PureComponent} from "react"

class Message extends PureComponent {

    render() {
        return (
            <>
                <p style={style}> {this.props.message} </p>
            </>
        )
    }
}

const style = {
    color: "white",
    margin: "10px",
    fontFamily: "Arial"
};

export default Message;

import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {firstName: "Aliaksandr", lastName: "Hvozdzeu"};
    }

    render() {
        const style = {
            color: "white",
            padding: "10px",
            fontFamily: "Arial"
        };
        return <span style={style}>I'm a {this.state.firstName} {this.state.lastName}!</span>;
    }

}

export default Comment;

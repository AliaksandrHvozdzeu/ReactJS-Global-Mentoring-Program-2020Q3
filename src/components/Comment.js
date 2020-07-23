import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hello: "Hello", world: "World!"};
        this.sayHelloAll = this.sayHelloAll.bind(this);
        this.sayHelloWorld = this.sayHelloWorld.bind(this);
    }

    sayHelloAll() {
        this.setState({world: "All!"});
    }

    sayHelloWorld() {
        this.setState({world: "World!"});
    }

    render() {
        const style = {
            color: "#000",
            fontFamily: "Arial"
        };

        return (
            <>
                <p style={style}>React.Component: {this.state.hello} {this.state.world}</p>
                <button onClick={this.sayHelloAll}>All!</button>
                <button onClick={this.sayHelloWorld}>World!</button>
            </>
        );

    }

}

export default Comment;

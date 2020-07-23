import React from 'react';
import './App.css';
import Comment from "./components/Comment";
import Message from "./components/Message";

const myComponent = <div>myComponent: Hello World!</div>;

let createElement = React.createElement(
    "p",
    {style: {color: "#000"}},
    `React.createElement: Hello World!`
);

function App() {
    return (
        <div className="App">
            {myComponent}
            <Comment/>
            {createElement}
            <Message
                message={"React.PureComponent: Hello World!"}
            />
        </div>
    );
}

export default App;

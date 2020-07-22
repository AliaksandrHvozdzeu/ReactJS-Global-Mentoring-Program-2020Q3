import React from 'react';
import './App.css';
import Comment from "./components/Comment";
import Message from "./components/Message";

const myComponent = <div>Hello</div>;

let about = React.createElement(
    "h1",
    { style: { color: "white" } },
    `I'm learning ReactJS.`
);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {myComponent}
                <Comment/>
                {about}
                <Message
                    message={"This is test message through props"}
                />
            </header>
        </div>
    );
}

export default App;

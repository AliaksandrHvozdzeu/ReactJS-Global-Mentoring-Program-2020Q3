import React from "react";
import "./App.css";
import Comment from "./components/Comment";
import Message from "./components/Message";
import FunctionComponent from "./components/FunctionComponent";

let createElement = React.createElement(
  "p",
  { style: { color: "#000" } },
  `React.createElement: Hello World!`
);

function App() {
  return (
    <div className="App">
      <FunctionComponent />
      <Comment/>
      {createElement}
      <Message
        message={"React.PureComponent: Hello World!"}
      />
    </div>
  );
}

export default App;

import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';

function App() {
  const component = React.createElement('p', {}, 'Hello World 3!');

  return (
    <div className="App">
      <HelloWorld />
      <HelloWorld2 />
      {component}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

const context = React.createContext();

function App() {
  const [state, setState] = useState({
    user: {
      name: 'frank', id: 1, age: 18
    }
  })
  return (
    <context.Provider value={{ state, setState }}>
      <div className="App">
        Learn Redux
        <Child1 />
        <Child2 />
      </div>
    </context.Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

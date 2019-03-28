import React from 'react';
import ReactDOM from 'react-dom';
import { blue } from 'ansi-colors';

const App = () => {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
      {buttonText}
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
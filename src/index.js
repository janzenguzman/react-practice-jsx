// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = { text: 'Click Me!' };
  const buttonStyle = { backgroundColor: 'violet', color: 'black' }

  return (
  <div>
    <h1>Hi there!</h1>
    <ul>
      <li>Number 1</li>
      <li>Another listed item</li>
      <li>Last for sample purposes</li>
    </ul>
    <label className="label" htmlFor="name">
      Enter name:
    </label>
    <input id="name" type="text" />
    <button style={buttonStyle}>
      {buttonText.text}
    </button>
  </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render (
  <App />,
  document.querySelector('#root')
);

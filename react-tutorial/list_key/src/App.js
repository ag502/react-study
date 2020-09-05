import React from 'react';
import logo from './logo.svg';

function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number, idx) =>
    <li key={number.toString()}>{number}</li>
  )
  return (
      <ul>{listItems}</ul>
  )
}

function App() {
  return (
    <div className="App">
      <NumberList numbers={[1, 2, 3, 4, 5]}/>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import FancyButton from "./FancyButton";

function App() {
  const [test, setTest] = useState('')
  return (
    <div className="App">
      <FancyButton test={test}>
          <p>Hello</p>
      </FancyButton>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import logo from './logo.svg';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      document.title = `You clicked ${count} times`
      return () => console.log('a')
  }, [count])

  return (
    <div className="App">
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;

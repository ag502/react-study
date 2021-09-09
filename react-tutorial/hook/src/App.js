import React, {useState, useEffect} from 'react';
import logo from './logo.svg';


function App() {
  const [count, setCount] = useState(0);
  const [size, setWindowSize] = useState({height: window.innerHeight, width: window.innerWidth})

  useEffect(() => {
      document.title = `You clicked ${count} times`
      return () => console.log('a')
  }, [count]);

  useEffect(() => {
      const handleWindowSize = () => {
          setWindowSize({height: window.innerHeight, width: window.innerWidth})
      }

      window.addEventListener('resize', handleWindowSize)
      return () => {
          window.removeEventListener('resize', handleWindowSize)
      }
  }, [size])

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

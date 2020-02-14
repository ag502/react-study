import React, {Component, useState, useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}/>
      <ClassComp initNumber={2}/>
    </div>
  );
}

const funcStyle = 'color:blue';
let funcId = 0;

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState((new Date()).toString());

  useEffect(function() {
    console.log('%cfunc => useEffect (componentDidMount)' + (++funcId), funcStyle);
    document.title = number;

    return function() {
      console.log('%cfunc => useEffect return' + (++funcId), funcStyle);
    }
  }, [number]);

  useEffect(function() {
    console.log('%cfunc => useEffect (componentDidMount, componentDidUpdate)' + (++funcId), funcStyle);
    document.title = number;

    return function() {
      console.log('%cfunc => useEffect return' + (++funcId), funcStyle);
    }
  }, [number]);

  console.log('%cfunc => render' + (++funcId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input 
          type="button" 
          value="random"
          onClick={function() {
            setNumber(Math.random())
          }}>
        </input>
        <input 
          type="button" 
          value="date"
          onClick={function() {
            setDate((new Date()).toString())
          }}>
        </input>
    </div>
  )
}

const classStyle = 'color:red';

class ClassComp extends Component{
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }

  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }

  shouldComponentUpdate(nextProps, newState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    console.log(nextProps, newState, this.state);
    return true;
  }

  componentWillUpdate(nextProps, newState) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%cclass => componentDidUpdate', classStyle);
    console.log(prevProps, prevState, this.state);
  }

  render() {
    console.log('%cclass => render', classStyle);

    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input 
          type="button" 
          value="random"
          onClick={function() {
            this.setState({number: Math.random()});
          }.bind(this)}>
        </input>
        <input 
          type="button" 
          value="date"
          onClick={function() {
            this.setState({date: (new Date()).toString()});
          }.bind(this)}>
        </input>
      </div>
    )
  }
}

export default App;

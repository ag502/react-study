import React, {Component} from 'react';

class Clock extends Component {
    state = {
        date: new Date()
    }

    tick() {
        // this.setState({date: new Date()})
        this.setState((state, props) => (
            {
                date: new Date()
            }
        ))
    }

    componentDidMount() {
        console.log('Mounted!!!')
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Should I update???')
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Updated!!!')
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>
                    It is {this.state.date.toLocaleString()}
                </h2>
            </div>
        )
    }
}

export default Clock;
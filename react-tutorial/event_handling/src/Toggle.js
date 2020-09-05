import React, {Component} from 'react';

export default class Toggle extends Component {
    state = {
        isToggle: true,
    }

    handleClick(arg, e) {
        console.log(arg)
        console.log(e.target)
        this.setState(state => (
            {
                isToggle: !state.isToggle
            }
        ))
    }

    handleClick = (arg) => e => {
        console.log(arg)
        console.log(e.target)
        this.setState(state => (
            {
                isToggle: !state.isToggle
            }
        ))
    }

    render() {
        return (
            <button
                onClick={
                    this.handleClick(this.state.isToggle)
                    /*this.handleClick.bind(this, this.state.isToggle)*/
                }
            >
                {this.state.isToggle ? 'ON' : 'OFF'}
            </button>
        )
    }
}
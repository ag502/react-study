import React, {Component} from 'react'
import logProps from "./logProps";

class FancyButton extends Component {
    render() {
        return <button type="button">{this.props.children}</button>
    }
}

export default logProps(FancyButton)
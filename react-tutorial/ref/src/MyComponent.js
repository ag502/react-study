import React, {Component, createRef} from 'react'

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
    }

    handleClick = () => {
        console.log(this.myRef.current)
    }

    render() {
        return (
            <div
                ref={this.myRef}
                onClick={this.handleClick}
            >TEST</div>
        )
    }
}

export default MyComponent
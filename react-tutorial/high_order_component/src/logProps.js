import React, {Component} from 'react'

const logProps = (WrappedComponent) => {
    return class extends Component {
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log(`old props: ${prevProps}`)
            console.log(`new props: ${this.props}`)
        }

        componentDidMount() {
            console.log(this.props)
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default logProps
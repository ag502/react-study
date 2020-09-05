import React, {Component} from 'react'

class NameForm extends Component {
    state = {
        value: ''
    }

    handleFormChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        alert(`A name was submitted: ${this.state.value}`)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleFormChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default NameForm
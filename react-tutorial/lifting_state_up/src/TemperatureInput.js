import React, {Component} from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends Component {
    handleInputChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleInputChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput
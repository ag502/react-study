import React, {Component} from 'react'
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString()
}


class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c'
    }

    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature})
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature})
    }

    render() {
        const {scale, temperature} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toCelsius) : temperature
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
            </div>
        )
    }
}

export default Calculator
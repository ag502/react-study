import React, {Component, createRef} from 'react'

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = createRef();
    }

    focusTextInput = () => {
        this.textInput.current.focus()
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

export default CustomTextInput
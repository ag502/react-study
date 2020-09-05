import React, {useState} from 'react'

const EssayForm = () => {
    const [value, setValue] = useState( 'Please write an essay about your favorite DOM element.')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        alert(`An essay was Submitted ${value}`)
    }

    const handleChangeTextarea = (e) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Essay:
                <textarea
                    value={value}
                    onChange={handleChangeTextarea}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default EssayForm
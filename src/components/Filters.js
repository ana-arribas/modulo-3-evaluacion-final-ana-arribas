import React from 'react'

const Filters = (props) => {
    const handleChange = (event) => {
        props.handleChange(event.target.value)
    }
    return (
        <input
            className="App-search"
            type="text"
            id="search"
            name="search"
            value={props.inputValue}
            onChange={handleChange}
        />
    );
}
export default Filters
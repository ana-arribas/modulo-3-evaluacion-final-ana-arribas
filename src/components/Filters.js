import React from 'react'

const Filters = (props) => {
    const handleChange = (event) => {
        props.handleChange(event.target.value)
    }

    return (<form>
        <input
            className="App-search"
            type="text"
            id="search"
            name="search"
            value={props.inputValue}
            onChange={handleChange}
        />
    </form>
    );
}
export default Filters
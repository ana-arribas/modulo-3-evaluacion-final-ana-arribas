import React from 'react'

const Filters = (props) => {
    const handleChange = (event) => {
        props.handleChange(event.target.value)
    }

    // const handleCheck = (event) => {
    //     props.handleCheck(event.target.checked)
    // }
    return (<form>
        <input
            className="App-search"
            type="text"
            id="search"
            name="search"
            value={props.inputValue}
            onChange={handleChange}
        />
        {/* <input
            className="App-search"
            type="checkbox"
            id="search"
            name="search"
            value={props.inputValue}
            onChange={handleCheck}
        /> */}
    </form>
    );
}
export default Filters
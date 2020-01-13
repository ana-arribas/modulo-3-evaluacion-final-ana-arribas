import React from 'react'

const Filters = (props) => {

    const lifting = (event) => {
        props.lifting(event.target.value)
    }

    return (<form className="search">
        <label htmlFor="search">Buscar</label>
        <input
            type="text"
            id="search"
            name="search"
            value={props.value}
            onChange={lifting}
        />
    </form>
    );
}

export default Filters
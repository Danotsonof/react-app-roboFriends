import React from "react"

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2 tc'>
            <input
                type='search'
                placeholder='search robots'
                className='pa3 b--green bg-ligtest-blue'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox
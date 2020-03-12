import React from "react"

const Scroll = (props) => {
    return (
        <div className='ma3' style={{ overflowY: 'scroll', border: '5px solid black', height: '75vh' }}>
            {props.children}
        </div>
    )
}

export default Scroll
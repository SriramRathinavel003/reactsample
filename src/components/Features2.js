import React from 'react'

function Features2({ image, par }) {
    return (
        <div>
            <div style={{ width: "300px", height: "250px" }}>
                <img src={image} />
            </div>
            <div style={{fontWeight:"bold"}}  >
                {par}
            </div>


        </div>
    )
}

export default Features2
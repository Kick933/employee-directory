import React from 'react'

function WrapperCard(props) {
    return (
        <div className="bg-pink-200 rounded-2xl w-11/12 text-center mx-auto my-6 py-6">
            {props.children}
        </div>
    )
}

export default WrapperCard

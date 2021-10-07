import React, { useState } from 'react'

function Search(props) {
    const setIsSearching = props.setIsSearching
    const [input, setInput] = useState("Search by Name")
    function makeChange(e) {
        const target = e.target
        setInput(target.value)
    }
    return (
        <div className="text-center flex flex-col items-center my-6">
            <input className="inline-block border-2 p-1 border-red-200 rounded-lg w-3/4 md:w-1/5" type="text" value={input} onChange={makeChange}></input>
            <button className="text-sm bg-red-400 px-1 py-1 rounded-md active:bg-red-500 focus:ring-2 focus:ring-red-600 mx-auto my-1 block" onClick={() => setIsSearching(false)}>Back to Home</button>
        </div>
    )
}

export default Search

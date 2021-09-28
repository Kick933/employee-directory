import React, { useState } from 'react'

function AddTeam() {
    const [name, setName] = useState("Name of Team")
    return (
        <div className="w-full h-full bg-green-400 rounded-2xl grid grid-flow-col sm:grid-flow-row">
            <div className="w-full h-full bg-transparent grid-flow-row mx-auto my-4 grid">
                <p className="block mx-auto text-sm">Name of Team</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={name} onChange={() => setName(this.value)}></input>
                <button className="text-sm bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1 block" type="submit">"Add Team</button>
            </div>
        </div>
    )
}

export default AddTeam

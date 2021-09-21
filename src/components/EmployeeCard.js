import React from 'react'

function EmployeeCard(props) {
    const person = props.data
    return (
        <div className="my-6 mx-auto bg-gray-300 shadow-xl rounded-xl w-2/4 sm:w-9/12 grid md:grid-flow-col px-auto py-6 align-middle">
            <p className="text-center my-6 text-xl  md:border-black md:border-r">{person.name}</p>
            <p className="text-center my-6 text-xl md:border-black md:border-r">{person.email}</p>
            <p className="text-center my-6 text-xl md:border-black md:border-r">{person.id}</p>
            <p className="text-center my-6 text-xl">{person.contact || "Email ID"}</p>
            <div className="flex justify-center items-center">
                <button className="bg-blue-400 px-4 py-2 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600">Edit</button>
            </div>
        </div>
    )
}

export default EmployeeCard

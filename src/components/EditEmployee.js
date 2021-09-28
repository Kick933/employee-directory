import React, { useState, useContext } from 'react'
import { EmployeeData } from '../contexts/EmployeeData';

function EditEmployee(props) {
    const { data, setData } = useContext(EmployeeData)
    const makeChange = e => {
        e.preventDefault();
        let newData = JSON.parse(JSON.stringify(data))
        // TODO check if we are adding employee. If yes,then push the state to relevant memebrs array
        // Else modify the relevant memeber only
    }
    const [name, setName] = useState("Name")
    const [id, setId] = useState("ID")
    const [email, setEmail] = useState("Email")
    const [contact, setContact] = useState("Contact")
    return (
        <div className="w-full h-full bg-transparent grid-flow-row mx-auto my-4 grid">
            <p className="block mx-auto text-sm">Name</p>
            <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={name} onChange={() => setName(this.value)}></input>
            <p className="block mx-auto text-sm">Employee ID</p>
            <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={id} onChange={() => setId(this.value)}></input>
            <p className="block mx-auto text-sm">Email Address</p>
            <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={email} onChange={() => setEmail(this.value)}></input>
            <p className="block mx-auto text-sm">Contact</p>
            <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={contact} onChange={() => setContact(this.value)}></input>
            <button className="text-sm bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1 block" type="submit" onClick={makeChange}>{props.add ? "Add" : "Update"}</button>
        </div>
    )
}

export default EditEmployee


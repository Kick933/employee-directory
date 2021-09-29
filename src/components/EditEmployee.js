import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router';
import { EmployeeData } from '../contexts/EmployeeData';
import { IndexLocator } from '../contexts/IndexLocator';

function EditEmployee(props) {
    const history = useHistory()
    const { data, setData } = useContext(EmployeeData)
    const { isceo, setisceo, employeeIndex, setEmployeeIndex, teamIndex, setTeamIndex, departmentIndex, setDepartmentIndex, isAdding, setIsAdding } = useContext(IndexLocator)
    const makeChange = e => {
        let newData = JSON.parse(JSON.stringify(data))
        const newMember = { name, id, email, contact, isHead: member.isHead || false }
        if (isceo) {
            newData.ceo = { ...newMember, isceo: true }
        } else if (isAdding) {
            newData.departments[departmentIndex].teams[teamIndex].members.push(newMember)
        } else if (teamIndex === undefined) {
            newData.departments[departmentIndex].head = newMember
        } else {
            newData.departments[departmentIndex].teams[teamIndex].members[employeeIndex] = newMember
        }
        setData(newData)
        setDepartmentIndex(undefined)
        setTeamIndex(undefined)
        setEmployeeIndex(undefined)
        setIsAdding(false)
        setisceo(false)
        history.push('/')
    }

    function referToTransfer(e) {
        console.log('Transferring')
    }
    let member = {
        name: "Name",
        id: "ID",
        email: "Email ID",
        contact: "Contact"
    }
    if (isceo) {
        member = data.ceo
    } else if (!isAdding) {
        if (teamIndex === undefined) {
            member = JSON.parse(JSON.stringify(data.departments[departmentIndex].head))
        } else {
            member = JSON.parse(JSON.stringify(data.departments[departmentIndex].teams[teamIndex].members[employeeIndex]))
        }
    }
    const [name, setName] = useState(member.name)
    const [id, setId] = useState(member.id)
    const [email, setEmail] = useState(member.email)
    const [contact, setContact] = useState(member.contact)
    return (
        <>
            {!isceo && departmentIndex === undefined ? history.push('/') : null}
            <div className="w-full h-full bg-transparent grid-flow-row mx-auto my-4 grid">
                <p className="block mx-auto text-sm">Name</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <p className="block mx-auto text-sm">Employee ID</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
                <p className="block mx-auto text-sm">Email Address</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p className="block mx-auto text-sm">Contact</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={contact} onChange={(e) => setContact(e.target.value)}></input>
                <button className="text-sm bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1 block" type="submit" onClick={makeChange}>{isAdding ? "Add" : "Update"}</button>
                {(!isceo && !isAdding) ? <button className="text-sm bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1 block" type="submit" onClick={referToTransfer}>Transfer</button> : null}
            </div>
        </>
    )
}

export default EditEmployee


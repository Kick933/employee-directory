import React, { useState, useContext } from 'react'
import { EmployeeData } from '../contexts/EmployeeData';
import { IndexLocator } from '../contexts/IndexLocator';

function EditEmployee() {
    const { data, setData } = useContext(EmployeeData)
    const { departmentIndex, setDepartmentIndex, teamIndex, setTeamIndex, isCeo, setIsCeo, isAdding, setIsAdding, memberIndex, setMemberIndex, isHead, setIsHead } = useContext(IndexLocator)

    function makeChange() {
        member = { name, id, email, contact }
        let newData = JSON.parse(JSON.stringify(data))
        if (isCeo) {
            newData.ceo = {
                ...newData.ceo,
                ...member,
            }
        } else if (isHead) {
            newData.departments[departmentIndex].head = {
                ...newData.departments[departmentIndex].head,
                ...member
            }
        } else if (isAdding) {
            newData.departments[departmentIndex].teams[teamIndex].members.push(
                {
                    ...member,
                    team: newData.departments[departmentIndex].teams[teamIndex].name,
                    department: newData.departments[departmentIndex].name
                }
            )
        } else {
            newData.departments[departmentIndex].teams[teamIndex].members[memberIndex] = {
                ...newData.departments[departmentIndex].teams[teamIndex].members[memberIndex],
                ...member
            }
        }
        setData(newData)
        goHome()
    }
    function referToTransfer(e) {
        alert('Transfer functionality not yet enabled.')
    }
    function goHome() {
        setDepartmentIndex(undefined)
        setTeamIndex(undefined)
        setIsAdding(false)
        setIsCeo(false)
        setIsHead(false)
        setMemberIndex(undefined)
    }
    // Gets the employee info from database
    var member
    if (isCeo) {
        member = data.ceo
    } else if (isHead) {
        member = data.departments[departmentIndex].head
    } else if (isAdding) {
        member = {
            name: "Name", email: "Email", contact: "Contact", id: "Employee ID", department: data.departments[departmentIndex].name, team: data.departments[departmentIndex].teams[teamIndex].name
        }
    } else {
        member = data.departments[departmentIndex].teams[teamIndex].members[memberIndex]
    }


    const [name, setName] = useState(member.name)
    const [id, setId] = useState(member.id)
    const [email, setEmail] = useState(member.email)
    const [contact, setContact] = useState(member.contact)
    return (
        <>
            <div className="w-full h-full bg-transparent grid-flow-row mx-auto my-4 grid">
                <p className="block mx-auto text-sm">Name</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <p className="block mx-auto text-sm">Employee ID</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
                <p className="block mx-auto text-sm">Email Address</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p className="block mx-auto text-sm">Contact</p>
                <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={contact} onChange={(e) => setContact(e.target.value)}></input>
                <button className="text-sm bg-green-400 px-1 py-1 rounded-md active:bg-green-500 focus:ring-2 focus:ring-green-600 mx-auto my-1 block" type="submit" onClick={makeChange}>{isAdding ? "Add" : "Update"}</button>
                {(!isCeo && !isAdding) ? <button className="text-sm bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1 block" type="submit" onClick={referToTransfer}>Transfer</button> : null}
            </div>
        </>
    )
}

export default EditEmployee


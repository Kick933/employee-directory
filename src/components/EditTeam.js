import React, { useContext, useState } from 'react'
import { EmployeeData } from '../contexts/EmployeeData'
import { IndexLocator } from '../contexts/IndexLocator'

function EditTeam() {
    const { data, setData } = useContext(EmployeeData)
    const { teamIndex, setTeamIndex, departmentIndex, setDepartmentIndex, isAdding, setIsAdding } = useContext(IndexLocator)
    const [name, setName] = useState(() => provideTeamName())

    function provideTeamName() {
        return (teamIndex === undefined ? "Name of Team" : data.departments[departmentIndex].teams[teamIndex].name)
    }
    function makeChange() {
        let newData = JSON.parse(JSON.stringify(data))
        if (teamIndex === undefined) {
            newData.departments[departmentIndex].teams.push({
                name: name,
                members: []
            })
        } else {
            newData.departments[departmentIndex].teams[teamIndex].name = name
            newData.departments[departmentIndex].teams[teamIndex].members.map(member => member.team = name)
        }
        setData(newData)
        goHome()
    }
    function goHome() {
        setTeamIndex(undefined)
        setDepartmentIndex(undefined)
        setIsAdding(false)
    }
    return (
        <div className="w-full h-full bg-transparent grid-flow-row mx-auto my-4 grid">
            <p className="block mx-auto text-sm">Name of team</p>
            <input className="bg-white text-sm mx-auto my-2 block border-2 rounded-md border-pink-200" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <button className="text-sm bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1 block" type="submit" onClick={makeChange}>{isAdding ? "Add" : "Update"}</button>
            <button className="text-sm bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1 block" type="submit" onClick={goHome}>Back to Home</button>
        </div>
    )
}

export default EditTeam

import React, { useContext, useState } from 'react'
import { IndexLocator } from '../contexts/IndexLocator'
import SearchCard from './SearchCard'
import { v4 as uuidv4 } from 'uuid'

function Transfer(props) {
    const data = props.data
    const setData = props.setData
    const { departmentIndex, setDepartmentIndex, teamIndex, setTeamIndex, memberIndex, setMemberIndex } = useContext(IndexLocator)
    const member = data.departments[departmentIndex].teams[teamIndex].members
    const [newTeamIndex, setNewTeamIndex] = useState(undefined)

    function listTeams() {
        if (data.departments[departmentIndex].teams.length <= 1) {
            return (
                <option value="" disabled>No teams available</option>
            )
        }
        return data.departments[departmentIndex].teams.map((team, index) => {
            if (index === teamIndex) {
                return (
                    <option disabled value={index} key={uuidv4()}>{team.name}</option>
                )
            }
            return (
                <option value={index} key={uuidv4()}>{team.name}</option>
            )
        })
    }
    function makeChange(e) {
        const value = e.target.value
        setNewTeamIndex(value)
    }
    function transfer() {
        if (newTeamIndex === undefined) {
            alert("Please select a team")
        } else {
            const transitionMember = JSON.parse(JSON.stringify(data.departments[departmentIndex].teams[teamIndex].members[memberIndex]))
            transitionMember.team = data.departments[departmentIndex].teams[newTeamIndex].name
            transitionMember.isLead = false
            const newData = JSON.parse(JSON.stringify(data))
            newData.departments[departmentIndex].teams[teamIndex].members.splice(memberIndex, 1)
            newData.departments[departmentIndex].teams[newTeamIndex].members.push(transitionMember)
            setData(newData)
            goHome()
        }
    }

    function goHome() {
        setDepartmentIndex(undefined)
        setMemberIndex(undefined)
        setTeamIndex(undefined)
        props.setTransfer(false)
    }
    return (
        <>
            <h1 className="text-center mx-auto text-xl my-4">Employee Details</h1>
            <SearchCard member={member[memberIndex]} />
            <div className="mx-auto">
                <label className="mx-auto w-60 text-center block" htmlFor="team">Choose new team:</label>
                <br></br>
                <select name="team" id="team" defaultValue="" className="mx-auto block w-60 rounded-sm shadow-lg border-2 border-blue-300" onChange={makeChange}>
                    <option value="" disabled>Select a team</option>
                    {listTeams()}
                </select>
            </div>
            <button className="text-md block bg-green-400 px-1 py-1 h-8 w-40 rounded-md active:bg-green-500 focus:ring-2 focus:ring-green-600 mx-auto my-4" onClick={transfer}>Transfer</button>
        </>
    )
}

export default Transfer

import React, { useContext } from 'react'
import EmployeeCard from './EmployeeCard'
import { v4 as uuidv4 } from 'uuid'
import { IndexLocator } from '../contexts/IndexLocator'

function TeamCard(props) {
    const teams = props.teams
    const { setTeamIndex, setDepartmentIndex, setIsAdding } = useContext(IndexLocator)
    function editTeam(index) {
        setDepartmentIndex(props.departmentindex)
        setTeamIndex(index)
    }
    function addMember(index) {
        setDepartmentIndex(props.departmentindex)
        setTeamIndex(index)
        setIsAdding(true)
    }
    return (
        teams.map((team, teamindex) => (
            <div key={uuidv4()} className="w-10/12 rounded-3xl bg-blue-200 text-center mx-auto my-6 py-6">
                <div className="grid grid-rows-2 justify-center py-2 items-center sm:grid-cols-2 sm:p-0 sm:m-0">
                    <p className="font-serif text-2xl">{team.name}</p>
                    <button className="bg-green-400 text-md p-1 rounded-md active:bg-green-600 hover:bg-green-500 mx-auto my-2" onClick={() => addMember(teamindex)}>Add Member</button>
                    <button className="bg-green-400 text-md p-1 rounded-md active:bg-green-600 hover:bg-green-500 mx-auto my-2" onClick={() => editTeam(teamindex)}>Edit</button>
                </div>
                {team.members.length === 0 ? <p>Oops,You got an empty team.Add a member.</p> :
                    team.members.map((member, index) => <EmployeeCard key={uuidv4()} member={member} departmentindex={props.departmentindex} memberindex={index} teamindex={teamindex} />)}
            </div>
        ))

    )
}

export default TeamCard

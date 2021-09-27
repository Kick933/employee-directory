import React from 'react'
import EmployeeCard from './EmployeeCard'
import { v4 as uuidv4 } from 'uuid'

function TeamCard(props) {
    const team = props.team
    return (
        <div className="w-10/12 rounded-3xl bg-blue-200 text-center mx-auto my-6 py-6">
            <div className="grid grid-rows-2 justify-center py-2 items-center sm:grid-cols-2 sm:p-0 sm: m-0">
                <p className="font-serif text-2xl">{team.name}</p>
                <button className="bg-green-400 p-2 rounded-md active:bg-green-500 focus:ring-2 focus:ring-green-600 m-auto" departmentindex={props.departmentindex} teamindex={props.teamindex}>Add Member</button>
            </div>
            {team.members.length === 0 ? <p>Oops,You got an empty team.Add a member.</p> : null}
            {team.members.map((member, index) => <EmployeeCard key={uuidv4()} data={member} departmentName={props.departmentName} departmentindex={props.departmentindex} memberindex={index} teamindex={props.teamindex} teamName={props.teamName} />)}
        </div>
    )
}

export default TeamCard

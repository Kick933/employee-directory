import React from 'react'
import EmployeeCard from './EmployeeCard'

function TeamCard(props) {
    const team = props.data
    return (
        <div className="w-10/12 rounded-3xl bg-blue-200 text-center mx-auto my-6 py-6">
            <p>{team.name}</p>
            {team.members.map(member => <EmployeeCard data={member} />)}

        </div>
    )
}

export default TeamCard

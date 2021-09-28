import React from 'react'
import TeamCard from './TeamCard'
import WrapperCard from './WrapperCard'
import { v4 as uuidv4 } from 'uuid'
import EmployeeCard from './EmployeeCard'

function DepartmentCard(props) {
    const data = props.data
    return (
        <WrapperCard>
            <div className="grid grid-rows-2 justify-center py-2 items-center sm:grid-cols-2 sm:p-0 sm: m-0">
                <h1>{data.name}</h1>
                <button className="bg-green-400 text-md p-1 rounded-md active:bg-green-500 focus:ring-2 focus:ring-green-600 m-auto" departmentindex={props.departmentindex} teamindex={props.teamindex}>Add Team</button>
            </div>
            <EmployeeCard head={data.head} departmentName={data.name} departmentIndex={props.departmentIndex} />
            {data.teams.map((team, teamindex) => <TeamCard key={uuidv4()} departmentindex={props.departmentindex} team={team} departmentName={data.name} teamindex={teamindex} teamName={team.name} />)}
        </WrapperCard>
    )
}

export default DepartmentCard

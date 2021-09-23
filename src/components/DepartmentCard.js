import React from 'react'
import TeamCard from './TeamCard'
import WrapperCard from './WrapperCard'
import { v4 as uuidv4 } from 'uuid'
import EmployeeCard from './EmployeeCard'

function DepartmentCard(props) {
    const data = props.data
    return (
        <WrapperCard>
            <h1>{data.name}</h1>
            <EmployeeCard head={data.head} departmentName={data.name} departmentIndex={props.departmentIndex} />
            {data.teams.map((team, teamindex) => <TeamCard key={uuidv4()} departmentindex={props.departmentindex} team={team} departmentName={data.name} teamindex={teamindex} teamName={team.name} />)}
        </WrapperCard>
    )
}

export default DepartmentCard

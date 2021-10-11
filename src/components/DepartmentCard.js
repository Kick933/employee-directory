import React, { useContext } from 'react'
import WrapperCard from './WrapperCard'
import { v4 as uuidv4 } from 'uuid'
import TeamCard from './TeamCard'
import { IndexLocator } from '../contexts/IndexLocator'
import EmployeeCard from './EmployeeCard'

function DepartmentCard(props) {
    const departments = props.data
    const { setDepartmentIndex, setIsAdding } = useContext(IndexLocator)
    function addTeam(index) {
        setDepartmentIndex(index)
        setIsAdding(true)
    }
    return (
        departments.map((department, index) => (
            <WrapperCard key={uuidv4()}>
                <div className="grid grid-rows-2 justify-center py-2 items-center sm:grid-cols-2 sm:p-0 sm: m-0">
                    <h1>{department.name}</h1>
                    <button className="bg-green-400 w-40 text-md p-1 rounded-md active:bg-green-500 focus:ring-2 focus:ring-green-600 m-auto" departmentindex={index} onClick={() => addTeam(index)}>Add Team</button>
                </div>
                <EmployeeCard member={department.head} departmentindex={index} />
                <TeamCard className="w-11/12" teams={department.teams} departmentindex={index} />
            </WrapperCard>
        )
        )
    )

}

export default DepartmentCard

import { useContext } from 'react'

import { EmployeeData } from '../contexts/EmployeeData'

function EmployeeCard(props) {
    const { data, setData } = useContext(EmployeeData)
    function removeEmployee(event) {
        const target = event.target
        const departmentindex = target.getAttribute('departmentindex')
        const teamindex = target.getAttribute('teamindex')
        const memberindex = target.getAttribute('memberindex')
        setData({
            ...data,
            departments: [
                data.departments.map((a, index) => {
                    if (index !== departmentindex) {
                        return a;
                    }
                    return {
                        ...a,
                        teams: [
                            a.teams.map((team, index) => {
                                if (index !== teamindex) {
                                    return team
                                }
                                return {
                                    ...team,
                                    members: [
                                        team.members.filter((a, index) => index !== memberindex)
                                    ]
                                }
                            })
                        ]
                    }
                })

            ]
        })
    }


    if (props.head) {
        return (
            <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-3/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
                <p className="text-center my-4 text-xs  lg:border-black lg:border-r">{props.head.name}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{`Head of ${props.departmentName}`}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.head.id}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.head.email}</p>
                <p className="text-center my-4 text-xs">{props.head.contact}</p>
                <div className="flex justify-center items-center">
                    <button className="bg-blue-400 px-2 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 m-auto" departmentindex={props.departmentindex}>Edit</button>
                </div>
            </div>
        )
    } else {
        const person = props.data
        return (
            <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-3/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
                <p className="text-center my-4 text-xs  lg:border-black lg:border-r">{person.name}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{person.email}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{person.id}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{person.contact}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.teamName}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.departmentName}</p>
                {person.isLead ? <p className="text-center my-4 text-xs lg:border-black lg:border-r">Team Lead</p> : <button className="bg-blue-400 px-0.5 py-0.5 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-2 text-xs" departmentindex={props.departmentindex} teamindex={props.teamindex} memberindex={props.memberindex}>Set Lead</button>}
                <div className="flex justify-center items-center">
                    <button className="text-xs bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1" departmentindex={props.departmentindex} teamindex={props.teamindex} memberindex={props.memberindex}>Edit</button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-xs bg-red-400 px-1 py-1 rounded-md active:bg-red-500 focus:ring-2 focus:ring-red-600 mx-auto my-1" departmentindex={props.departmentindex} teamindex={props.teamindex} memberindex={props.memberindex} onClick={removeEmployee}>Remove</button>
                </div>
            </div>)
    }
}




export default EmployeeCard

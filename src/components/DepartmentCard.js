import React from 'react'
import TeamCard from './TeamCard'
import WrapperCard from './WrapperCard'

function DepartmentCard(props) {
    const data = props.data
    return (
        <WrapperCard>
            <div className=" text-center my-6 mx-auto bg-yellow-200 shadow-xl rounded-xl w-2/4 sm:w-9/12 grid md:grid-flow-col px-auto py-6 align-middle">
                <p className="text-center my-6 text-xl  md:border-black md:border-r">{data.head.name || "Name of Employee"}</p>
                <p className="text-center my-6 text-xl md:border-black md:border-r">{data.head.department || "Head of Department"}</p>
                <p className="text-center my-6 text-xl md:border-black md:border-r">{data.head.id || "Employee ID"}</p>
                <p className="text-center my-6 text-xl">{data.head.email || "Email ID"}</p>
                <p className="text-center my-6 text-xl">{data.head.contact || "Contact Number"}</p>
                <div className="flex justify-center items-center">
                    <button className="bg-blue-400 px-4 py-2 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600">Edit</button>
                </div>
            </div>
            {data.teams.map(team => <TeamCard data={team} />)}
        </WrapperCard>
    )
}

export default DepartmentCard

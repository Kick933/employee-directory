import React, { useContext } from 'react'

import { EmployeeData } from '../contexts/EmployeeData'
import { IndexLocator } from '../contexts/IndexLocator';

function EmployeeCard(props) {
    const member = props.member
    const { data, setData } = useContext(EmployeeData)
    const { setDepartmentIndex, setTeamIndex, setIsCeo, setMemberIndex, setIsHead } = useContext(IndexLocator)

    function editEmployee() {
        if (member.isCeo) {
            setIsCeo(true)
        } else if (member.isHead) {
            setIsHead(true)
            setDepartmentIndex(props.departmentindex)
        } else {
            setDepartmentIndex(props.departmentindex)
            setTeamIndex(props.teamindex)
            setMemberIndex(props.memberindex)
        }
    }
    function removeEmployee() {
        const departmentindex = props.departmentindex
        const teamindex = props.teamindex
        const memberindex = props.memberindex
        let newData = JSON.parse(JSON.stringify(data))
        newData.departments[departmentindex].teams[teamindex].members.splice(memberindex, 1)
        setData(newData)
    }
    function setLead() {
        const departmentindex = props.departmentindex
        const teamindex = props.teamindex
        const memberindex = props.memberindex
        const newData = JSON.parse(JSON.stringify(data))
        newData.departments[departmentindex].teams[teamindex].members = data.departments[departmentindex].teams[teamindex].members.filter((a, index) => {
            if (index !== Number(memberindex)) {
                a.isLead = false;
                return a
            }
            a.isLead = true;
            return a
        })
        setData(newData)
    }

    if (member.isCeo) {
        return (
            <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-3/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
                <p className="text-center my-4 text-base  lg:border-black lg:border-r font-bold col-span-1">{member.name}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r font-bold col-span-1">{`CEO`}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r font-bold col-span-1">{member.id}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r font-bold col-span-1">{member.email}</p>
                <p className="text-center my-4 text-base font-bold">{member.contact}</p>
                {!props.isSearching ? <button className="bg-blue-400 w-20 px-2 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 m-auto" onClick={editEmployee}>Edit</button> : null}
            </div >
        )
    }
    if (member.isHead) {
        // For department Heads
        return (
            <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-3/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
                <p className="text-center my-4 text-base  lg:border-black lg:border-r col-span-1">{member.name}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{`Head of ${member.department}`}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{member.id}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{member.email}</p>
                <p className="text-center my-4 text-base">{member.contact}</p>
                <div className="flex justify-center items-center">
                    {!props.isSearching ? <button className="bg-blue-400 px-2 py-1 w-20 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 m-auto" onClick={editEmployee}>Edit</button> : null}
                </div>
            </div>
        )
    } else {
        return (
            <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-4/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
                <p className="text-center my-4 text-base  lg:border-black lg:border-r col-span-1">{member.name}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{member.email}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{member.id}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{member.contact}</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{member.team} Team</p>
                <p className="text-center my-4 text-base lg:border-black lg:border-r col-span-1">{member.department} Department</p>
                {member.isLead ? <p className="text-center my-4 text-base lg:border-black lg:border-r">Team Lead</p> : <button className="text-base bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 m-auto w-20" onClick={setLead}>Set Lead</button>}
                <div className="flex justify-center items-center">
                    <button className="text-base bg-blue-400 px-1 py-1 w-20 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1" onClick={editEmployee}>Edit</button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-base bg-red-400 px-1 py-1 w-20 rounded-md active:bg-red-500 focus:ring-2 focus:ring-red-600 mx-auto my-1" onClick={removeEmployee}>Remove</button>
                </div>
            </div>)
    }
}




export default EmployeeCard

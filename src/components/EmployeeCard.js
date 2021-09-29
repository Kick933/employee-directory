import { useContext } from 'react'
import { useHistory } from 'react-router'

import { EmployeeData } from '../contexts/EmployeeData'
import { IndexLocator } from '../contexts/IndexLocator'

function EmployeeCard(props) {
    const { data, setData } = useContext(EmployeeData)
    const { setEmployeeIndex, setTeamIndex, setDepartmentIndex, setisceo } = useContext(IndexLocator)
    const history = useHistory()

    function removeEmployee(e) {
        const target = e.target
        const departmentindex = target.getAttribute('departmentindex')
        const teamindex = target.getAttribute('teamindex')
        const memberindex = target.getAttribute('memberindex')
        let newData = JSON.parse(JSON.stringify(data))
        newData.departments[departmentindex].teams[teamindex].members.splice(memberindex, 1)
        setData(newData)
    }
    function setLead(e) {
        const target = e.target
        const departmentindex = target.getAttribute('departmentindex')
        const teamindex = target.getAttribute('teamindex')
        const memberindex = target.getAttribute('memberindex')
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
    function referToEditPage(e) {
        const target = e.target
        const departmentindex = target.getAttribute('departmentindex')
        const teamindex = target.getAttribute('teamindex')
        const memberindex = target.getAttribute('memberindex')
        const isceo = target.getAttribute('isceo')
        if (isceo) {
            setisceo(true)
        } else if (teamindex === null) {
            setDepartmentIndex(Number(departmentindex))
        } else {
            setDepartmentIndex(Number(departmentindex))
            setTeamIndex(Number(teamindex))
            setEmployeeIndex(Number(memberindex))
        }
        history.push('/editEmployee')
    }

    if (props.ceo) {
        return (
            <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-3/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
                <p className="text-center my-4 text-xs  lg:border-black lg:border-r">{props.ceo.name}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{`CEO`}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.ceo.id}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.ceo.email}</p>
                <p className="text-center my-4 text-xs">{props.ceo.contact}</p>
                <button className="bg-blue-400 px-2 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 m-auto" isceo="true" onClick={referToEditPage}>Edit</button>
            </div>
        )
    }
    else if (props.head) {
        // For department Heads
        return (
            <div className="my-6 mx-auto bg-yellow-300 shadow-lg rounded-xl w-3/5 grid grid-flow-rows sm:grid-rows-2 lg:grid-flow-col px-auto py-2 align-middle">
                <p className="text-center my-4 text-xs  lg:border-black lg:border-r">{props.head.name}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{`Head of ${props.departmentName}`}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.head.id}</p>
                <p className="text-center my-4 text-xs lg:border-black lg:border-r">{props.head.email}</p>
                <p className="text-center my-4 text-xs">{props.head.contact}</p>
                <div className="flex justify-center items-center">
                    <button className="bg-blue-400 px-2 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 m-auto" departmentindex={props.departmentindex} onClick={referToEditPage}>Edit</button>
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
                {person.isLead ? <p className="text-center my-4 text-xs lg:border-black lg:border-r">Team Lead</p> : <button className="bg-blue-400 px-0.5 py-0.5 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-2 text-xs" departmentindex={props.departmentindex} teamindex={props.teamindex} memberindex={props.memberindex} onClick={setLead}>Set Lead</button>}
                <div className="flex justify-center items-center">
                    <button className="text-xs bg-blue-400 px-1 py-1 rounded-md active:bg-blue-500 focus:ring-2 focus:ring-blue-600 mx-auto my-1" departmentindex={props.departmentindex} teamindex={props.teamindex} memberindex={props.memberindex} onClick={referToEditPage}>Edit</button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-xs bg-red-400 px-1 py-1 rounded-md active:bg-red-500 focus:ring-2 focus:ring-red-600 mx-auto my-1" departmentindex={props.departmentindex} teamindex={props.teamindex} memberindex={props.memberindex} onClick={removeEmployee}>Remove</button>
                </div>
            </div>)
    }
}




export default EmployeeCard

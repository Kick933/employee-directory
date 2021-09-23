import React, { useState, useContext } from 'react'
import { EmployeeData } from '../contexts/EmployeeData';

function EditEmployee(props) {
    const { Data, setData } = useContext(EmployeeData)
    const makeChange = e => {
        e.preventDefault();
        if (props.teamIndex) {
            setData({
                ...Data,
                departments: [
                    Data.departments.map((a, index) => {
                        if (index !== props.departmentIndex) {
                            return a;
                        }
                        return {
                            ...a,
                            teams: [
                                a.teams.map((team, index) => {
                                    if (index !== props.teamIndex) {
                                        return team
                                    }
                                    return {
                                        ...team,
                                        members: [
                                            team.members.map((member, index) => {
                                                if (index !== props.memberIndex) {
                                                    return member
                                                }
                                                return dataSet
                                            })
                                        ]
                                    }
                                })
                            ]
                        }
                    })

                ]
            })
        } else {
            setData({
                ...Data,
                departments: [
                    Data.departments.map((a, index) => {
                        if (index !== props.departmentIndex) {
                            return a;
                        }
                        return {
                            ...a,
                            head: dataSet
                        }
                    })

                ]
            })
        }
    }
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    useEffect(

    )
    return (
        <div className="w-screen h-screen bg-gray-400 grid-flow-col mx-auto my-4">
            <input type="text" value={name} onChange={() => setName(this.value)}></input>
            <input type="text" value={id} onChange={() => setId(this.value)}></input>
            <input type="text" value={email} onChange={() => setEmail(this.value)}></input>
            <input type="text" value={contact} onChange={() => setContact(this.value)}></input>
            <button type="submit" onClick={makeChange}>{props.add ? "Add" : "Update"}</button>
        </div>
    )
}

export default EditEmployee


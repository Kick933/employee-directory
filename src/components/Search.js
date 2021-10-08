import React, { useState, useContext } from 'react'
import { EmployeeData } from '../contexts/EmployeeData'
import SearchCard from './SearchCard'
import WrapperCard from './WrapperCard'

function Search(props) {
    const { data } = useContext(EmployeeData)
    const [selected, setSelected] = useState("name")
    const setIsSearching = props.setIsSearching
    const [input, setInput] = useState("Search by Name")

    function makeChange(e) {
        const target = e.target
        setInput(target.value)
    }

    return (
        <>
            <div className="text-center flex flex-col items-center my-6">
                <input className="inline-block border-2 p-1 border-red-200 rounded-lg w-3/4 md:w-1/5" type="text" value={input} onChange={makeChange}></input>
                <label for="searchProperty">Search for</label>
                <select className="inline-block border-2 p-1 border-red-200 rounded-lg w-3/4 md:w-1/5" name="searchProperty" id="searchProperty" onChange={e => setSelected(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                    <option value="contact">Contact</option>
                    <option value="Email">Email</option>
                </select>
                <button className="text-sm bg-red-400 px-1 py-1 rounded-md active:bg-red-500 focus:ring-2 focus:ring-red-600 mx-auto my-1 block" onClick={() => setIsSearching(false)}>Back to Home</button>
            </div>
            <WrapperCard>
                {data.ceo[selected].toLowerCase().includes(input.toLowerCase()) ? <SearchCard member={data.ceo} /> : <h1>No Match found</h1>}
                {data.departments.map(department => {
                    return department.head[selected].toLowerCase().includes(input.toLowerCase()) ? <SearchCard member={department.head} /> : null
                })}
                {data.departments.map(department => {
                    return department.teams.map(team => {
                        return team.members.map(member => {
                            return member[selected].toLowerCase().includes(input.toLowerCase()) ? <SearchCard member={member} /> : null
                        })
                    })
                })}
            </WrapperCard>
        </>
    )
}

export default Search

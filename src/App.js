import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import { SampleData } from './SampleData'
import DepartmentCard from './components/DepartmentCard'
import { EmployeeData } from './contexts/EmployeeData'
import { IndexLocator } from './contexts/IndexLocator'
import EditTeam from './components/EditTeam'
import EmployeeCard from './components/EmployeeCard'
import EditEmployee from './components/EditEmployee'

function App() {
  const [data, setData] = useState(() => getData())// This state stores the employee Data.
  const [departmentIndex, setDepartmentIndex] = useState(undefined)// Stores the departmentIndex for operation.
  const [teamIndex, setTeamIndex] = useState(undefined)// Stores the teamIndex of the operation.
  const [memberIndex, setMemberIndex] = useState(undefined)// Stores the memberIndex of the operation.
  const [isCeo, setIsCeo] = useState(false)// To edit CEO, we keep all operation variables undefined.
  const [isHead, setIsHead] = useState(false)// To Edit a department Head, we only define departmentIndex and isHead variable.
  const [isAdding, setIsAdding] = useState(false)// To show add or update button conditionally.
  // Get the data from localstorage, if it exists,else return SampleData
  function getData() {
    if (localStorage.getItem('employeeData')) return JSON.parse(localStorage.getItem('employeeData'))
    return SampleData
  }
  // Push data updates to localstorage
  useEffect(() => {
    localStorage.setItem('employeeData', JSON.stringify(data))
  }
  )

  return (
    <EmployeeData.Provider value={{ data, setData }}>
      <IndexLocator.Provider value={{ departmentIndex, setDepartmentIndex, teamIndex, setTeamIndex, memberIndex, setMemberIndex, isCeo, setIsCeo, isHead, setIsHead, isAdding, setIsAdding }}>
        <Nav />
        {/* Fro showing Home Page */}
        {(departmentIndex === undefined && !isCeo && !isHead) ?
          (<>
            <EmployeeCard member={data.ceo} />
            <DepartmentCard data={data.departments} />
          </>
          )
          : null}
        {/* To show Team addition Page */}
        {(departmentIndex !== undefined && teamIndex === undefined && memberIndex === undefined && !isCeo && !isHead) ? <EditTeam /> : null}
        {/* To show Employee Addition and edition Page */}
        {(
          (isCeo) ||
          (isHead && departmentIndex !== undefined) ||
          (departmentIndex !== undefined && teamIndex !== undefined && isAdding) ||
          (departmentIndex !== undefined && teamIndex !== undefined && memberIndex !== undefined)
        ) ?
          <EditEmployee />
          : null}
        {(departmentIndex !== undefined && teamIndex !== undefined && memberIndex === undefined && !isAdding && !isHead) ?
          <EditTeam /> :
          null}
      </IndexLocator.Provider>
    </EmployeeData.Provider>
  )
}

export default App

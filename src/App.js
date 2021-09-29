import DepartmentCard from './components/DepartmentCard';
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react';
import { EmployeeData } from './contexts/EmployeeData'
import { SampleData } from './SampleData'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import EditEmployee from './components/EditEmployee';
import { IndexLocator } from './contexts/IndexLocator';
import EditTeam from './components/EditTeam';
import EmployeeCard from './components/EmployeeCard';

function App() {
  const history = useHistory()
  const [data, setData] = useState(() => setInitialData())
  const [employeeIndex, setEmployeeIndex] = useState(undefined)
  const [teamIndex, setTeamIndex] = useState(undefined)
  const [departmentIndex, setDepartmentIndex] = useState(undefined)
  const [isAdding, setIsAdding] = useState(false)
  const [isceo, setisceo] = useState(false)

  function setInitialData() {
    if (localStorage.getItem('employeeData')) {
      return JSON.parse(localStorage.getItem("employeeData"))
    } else {
      return SampleData
    }
  }
  function referToHome() {
    if (window.location.pathname !== '/') {
      history.push('/')
      cleanSlate()
    }
  }
  function cleanSlate() {
    setEmployeeIndex(undefined)
    setTeamIndex(undefined)
    setDepartmentIndex(undefined)
    setIsAdding(false)
  }

  // Data persistence effect
  useEffect(() => {
    localStorage.setItem('employeeData', JSON.stringify(data))
  }, [data])

  return (
    <EmployeeData.Provider value={{ data, setData }}>
      <IndexLocator.Provider value={{ isAdding, setIsAdding, employeeIndex, setEmployeeIndex, departmentIndex, setDepartmentIndex, teamIndex, setTeamIndex, isceo, setisceo }}>
        <Router>
          <div className="w-screen">
            <div className="w-screen grid lg:grid-cols-2 bg-gray-200 shadow-lg">
              <button className="self-center text-indigo-400 text-3xl text-center font-bold my-6" onClick={referToHome}>Employee Directory</button>
              <button className="text-indigo-400 mx-auto p-4 shadow-lg rounded-lg active:ring-2 active:ring-indigo-200"> Search</button>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <EmployeeCard ceo={data.ceo} />
              {data.departments.map((department, index) => <DepartmentCard key={uuidv4()} data={department} departmentindex={index} />)}
            </Route>
            <Route exact path={["/editEmployee", "/addEmployee"]}>
              <EditEmployee />
            </Route>
            <Route exact path={["/editTeam", "/addTeam"]}>
              <EditTeam />
            </Route>
          </Switch>
        </Router>
      </IndexLocator.Provider>
    </EmployeeData.Provider>
  );
}

export default App;

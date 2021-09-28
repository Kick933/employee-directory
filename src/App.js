import DepartmentCard from './components/DepartmentCard';
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react';
import { EmployeeData } from './contexts/EmployeeData'
import { SampleData } from './SampleData'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import EditEmployee from './components/EditEmployee';

function App() {
  const [data, setData] = useState(() => setInitialData())

  function setInitialData() {
    if (localStorage.getItem('employeeData')) {
      return JSON.parse(localStorage.getItem("employeeData"))
    } else {
      return SampleData
    }
  }

  // Data persistence effect
  useEffect(() => {
    localStorage.setItem('employeeData', JSON.stringify(data))
  }, [data])

  return (
    <EmployeeData.Provider value={{ data, setData }}>
      <Router>
        <div className="w-screen">
          <div className="w-screen grid lg:grid-cols-2 bg-gray-200 shadow-lg">
            <Link className="self-center text-indigo-400 text-3xl text-center font-bold my-6" to="/">Employee Directory</Link>
            <button className="text-indigo-400 mx-auto p-4 shadow-lg rounded-lg active:ring-2 active:ring-indigo-200"> Search</button>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            {data.departments.map((department, index) => <DepartmentCard key={uuidv4()} data={department} departmentindex={index} />)}
          </Route>
          <Route exact path="/editEmployee">
            <EditEmployee />
          </Route>
        </Switch>
      </Router>
    </EmployeeData.Provider>
  );
}

export default App;

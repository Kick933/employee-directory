import DepartmentCard from './components/DepartmentCard';
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react';
import { EmployeeData } from './contexts/EmployeeData'
import { SampleData } from './SampleData'

function App() {
  const [data, setData] = useState(() => setInitialData())

  function setInitialData() {
    if (localStorage.getItem('employeeData')) {
      return JSON.parse(localStorage.getItem("employeeData"))
    } else {
      return SampleData
    }
  }

  //Data persistence effect
  useEffect(() => {
    localStorage.setItem('employeeData', JSON.stringify(data))
  }, [data])
  return (
    <EmployeeData.Provider value={{ data, setData }}>
      <div className="w-screen">
        <div className="w-screen grid lg:grid-cols-2 bg-gray-200 shadow-lg">
          <span className="self-center text-indigo-400 text-3xl text-center font-bold my-6 ">Employee Directory</span>
          <button className="text-indigo-400 mx-auto p-4 shadow-lg rounded-lg active:ring-2 active:ring-indigo-200"> Search</button>
        </div>
        {data.departments.map((department, index) => <DepartmentCard key={uuidv4()} data={department} departmentindex={index} />)}
      </div>
    </EmployeeData.Provider>
  );
}

export default App;

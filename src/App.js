import './App.css';
import DepartmentCard from './components/DepartmentCard';
import SearchBar from './components/SearchBar';
import Sample from './SampleData';

function App() {
  return (
    <div className="w-screen">
      <div className="w-screen grid lg:grid-cols-2 bg-gray-200 shadow-lg">
        <span className="self-center text-indigo-400 text-3xl text-center font-bold my-6 ">Employee Directory</span>
        <SearchBar />
      </div>
      {Sample.departments.map(department => <DepartmentCard data={department} />)}
    </div>
  );
}

export default App;

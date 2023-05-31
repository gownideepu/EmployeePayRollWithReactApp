import './App.css';
import Home from './Component/Home';
import './Component/EmployeePage'
import { Route,Routes,Link } from 'react-router-dom';
import EmployeePage from './Component/EmployeePage';

function App() {
  return (
    <div>
      <nav>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='employeelist/' element={<EmployeePage/>}></Route>
      </Routes>
    </div>
  );
}
export default App;

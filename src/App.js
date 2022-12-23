import './App.css';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import LaborCodeMaintenance from './Pages/LaborCodeMaintenance/LaborCodeMaintenance';
import SupplyCodeMaintenance from './Pages/SupplyCodeManitenance/SupplyCodeMaintenance';
import ProjectExpenseCodeMaintenance from './Pages/ProjectExpenseCodeMaintenance/ProjectExpenseCodeMaintenance';
import EquipmentCodeMaintenance from './Pages/EquipmentCodeMaintenance/EquipmentCodeMaintenance';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaborCodeMaintenance/>}/>
        <Route path="/supply" element={<SupplyCodeMaintenance/>} />
        <Route path="/projectexpense" element={<ProjectExpenseCodeMaintenance/>}/>
        <Route path="/equipment" element={<EquipmentCodeMaintenance/>}/>
      </Routes>
    </Router>
  );
}

export default App;

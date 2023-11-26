import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Headder from './component/Headder';

function App() {
  return (
    <div className="App">
      <Headder/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

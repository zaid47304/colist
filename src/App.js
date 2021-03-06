
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contest from './components/Contest';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import Mycontest from './components/Mycontest';
import { useState } from 'react';
import ContestState from './context/contest/ContestState';
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  return (
    <>
      <ContestState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <h2 className='text-center'>Co<span className="badge bg-secondary">List</span></h2>
          <Routes>
            <Route exact path="/" element={<Contest showAlert={showAlert} />}></Route>
            <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
            <Route exact path="/mycontest" element={<Mycontest />}></Route>
          </Routes>
        </BrowserRouter>
      </ContestState>
    </>
  );
}

export default App;

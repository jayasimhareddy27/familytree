
import './App.css';
import { Routes, Route ,Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Nav from './components/Navbar/Nav';
import { useState } from 'react';
function App() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  return (
  
    <>
    <Nav/>    

    <Routes>
      <Route path='/' exact element={<Navigate replace  to="/Login" />} ></Route>
      <Route path='/Home' exact element={<Home />}  />
      <Route path='/Profile' exact element={<Profile/>}  />
      <Route path='/Login' exact element={<Login/>}  />
    </Routes>
    </>


  );
}

export default App;

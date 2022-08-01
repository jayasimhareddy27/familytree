import React, { useState,useEffect  } from 'react'
import {useDispatch} from "react-redux";
import { useNavigate ,useLocation} from 'react-router-dom';
import decode from 'jwt-decode';

import { Link } from "react-router-dom";

import './Nav.css'
import { LOGOUT } from "../../redux/constants/actiontype";


const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const location=useLocation();
  
  
  
  
  
  useEffect(()=>{
    const token=user?.token;
    
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) 
        Logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    //console.log("navbar");
  },[location])
  const Logout=()=>{
    dispatch({type:LOGOUT});
    navigate('/Login');
    setUser(null);
  }

  return (  
<>
  <ul className="topnav">
    <li className="active"><Link to={`/home`}>Home</Link></li>
    <li><Link to={`/Profile`}>Profile</Link></li>
    {user===null?
    <li className="right"><Link to={`/Login`}>Signin</Link></li>
    :
    <li className="right"><Link to={`/Login`}  onClick={Logout}>Logout</Link></li>
    }
    
  </ul>
</>

  )
}

export default Nav
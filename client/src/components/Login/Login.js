import React, { useEffect, useState } from 'react'
import './Login.css'
import {SignIn,SignUp} from './../../redux/actions/A_Auth.js'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(user!=null)
            navigate('/Home');
    },[user])


    const [displaysignin, setdisplaysignin] = useState(false)
    const initialState = { name: '', email: '', password: '' };
    const [SignupForm,setSignupForm]=useState(initialState);
    const handleChange=(e)=>{
        setSignupForm({...SignupForm,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(displaysignin){
            dispatch(SignIn(SignupForm,navigate));
        }else{
            dispatch(SignUp(SignupForm,navigate));
        }
    }
    
    const switchMode = () => {
        setdisplaysignin((prevdisplaysignin)=>!prevdisplaysignin);
        setSignupForm(initialState);
        const input1 = document.getElementsByName('email');
        input1.forEach(input => {
            input.value = '';
        });
        const input2 = document.getElementsByName('name');
        input2.forEach(input => {
            input.value = '';
        });
        const input3 = document.getElementsByName('password');
        input3.forEach(input => {
            input.value = '';
        });
    }
    return (

        <>
        <h2>Family Tree Organizer</h2>
        {displaysignin?
    <>
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form name ="form" required  >
                    <h1>Sign in</h1>
                    <br></br>
                    <input type="email" name="email" placeholder="Email@gmail.com"  onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Any of characters"  onChange={handleChange} required />
                    <br></br>
                    <h6>Forgot your password?</h6>
                    <button onClick={handleSubmit}>Sign In</button>
                </form>
            </div>


            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Hey there!</h1>
                        <p>Enter your login details if you're already a member. If not, click on sign up button to become a member.</p>
                        <button className="ghost" id="signin" onClick={()=>switchMode()} >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>    
    </>

        :
    <>
    <div className="container" id="container">
        <div className="form-container ">
            <form name= "form" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <br></br>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name ="email" placeholder="Email@gmail.com"  onChange={handleChange} required />
                <input type="password" name ="password" placeholder="Any of characters"  onChange={handleChange} required />
                <br></br>
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>

        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <h1>Hey there!</h1>
                    <p>Enter your personal details to sign up and become a member. If you're already one, click on sign in button to login.</p>
                    <button className="ghost" id="signIn" onClick={switchMode}>Sign In</button>
                </div>
            </div>
        </div>
    </div>    
        
        
    </> 
        }
        
        </>
  
      
  )
}

export default Login
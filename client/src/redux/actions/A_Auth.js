import { AUTH } from "../constants/actiontype"
import * as api from './../../api/index.js'

export const SignIn=(SignupForm,navigate)=>async (dispatch)=>{
    try {
        const {data}=await api.apisignin(SignupForm);
        const action={
            type:AUTH,
            data:data
        }
        dispatch(action);
        navigate('/Home');
    } catch (error) {
        console.log(error.response.data);
        if(error.response.status===404){
            console.log("Enter correct Email or signup");
            alert("Enter correct Email or do signup")
            return;
        }
        if(error.response.status===400){
            console.log("Enter correct password");
            alert("Enter correct password")
            return;
        }
    }
}

export const SignUp=(SignupForm,navigate)=>async (dispatch)=>{
    try {
        const {data}=await api.apisignup(SignupForm)
        
        const action={
            type:AUTH,
            data:data
        }
        dispatch(action);
        
        navigate('/Home');
    } catch (error) {
        console.log(error.response.data);
        if(error.response.data.message==='username already existing'){
            console.log("username already existing");
            alert("username already existing")
            return;
        }

        if(error.response.status===400){
            console.log("user already existing");
            alert("user already existing")
            return;
        }
        else{
            console.log("something went wrong");
            alert("something went wrong")
            return;
        }
    }
}



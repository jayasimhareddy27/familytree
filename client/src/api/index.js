import axios from 'axios';
const API=axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const apisignin=(SignupForm)=>API.post('/api/auth/signin',SignupForm);
export const apisignup=(SignupForm)=>API.post('/api/auth/signup',SignupForm);
export const apipostdata=(PostData)=>API.post('/postdata',PostData);
export const apideldata=(a,b)=>API.delete(`/postdata/${a}/${b}`);
export const apieditid=(id,email)=>API.patch(`/postdata/byemail/${id}/${email}`);
export const apigetdata=(user)=>API.post(`/postdata`,user);
export const apisharedata=(email)=>API.post(`/postdata/email`,{email});

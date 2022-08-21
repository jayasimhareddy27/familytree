import React, { useState,useEffect} from 'react'
import Form from './Form';
import Sample from './FamilyTree';
import Table from './Table';
import Nologin from '../Login/Nologin'
import axios from 'axios';
import './assets/styles.css'

const Profile = () => {
  const [currentid, setcurrentid] = useState(-100001)
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const [items, setitems] = useState([])
  useEffect(()=>{
    axios.post('http://localhost:5000/postdata/byemail',user?.result).then((data)=>{setitems(data.data);}).catch((err)=>{console.log(err);})
},[items]);
  const sharelink=`http://localhost:3000/byemail/${user?.result?.email}`;
  return (
    <div className='bdy'>
      {user===null
      ?
        <Nologin/>
      :
      <>
      <div className='Parent'>
        <div className='child1'>
          <Form user={user} currentid={currentid} setcurrentid={setcurrentid} />
        </div>
        <div className='child2'>
          <Table items={items} user={user} currentid={currentid} setcurrentid={setcurrentid} />
          <h1>Shareble-Link:  <a href={sharelink}><button > share</button></a></h1> 
        </div>
      </div>
        <div className='child3'>
          <Sample tree={items} />
        </div>
      </>
      }
    </div>
  )
}

export default Profile;

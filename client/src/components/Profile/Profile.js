import React, { useState,useEffect} from 'react'
import Form from './Form';
import Sample from './Sample';
import Table from './Table';
import Nologin from './Nologin'
import axios from 'axios';
import './assets/styles.css'

const Profile = () => {

  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const [items, setitems] = useState([])
  useEffect(()=>{
    axios.post('http://localhost:5000/postdata/byemail',user?.result).then((data)=>{setitems(data.data);}).catch((err)=>{console.log(err);})
},[items]);
  
  return (
    <div className='bdy'>
      {user===null
      ?
        <Nologin/>
      :
      <>

      <Sample  />
      <div className='Parent'>
        <div className='child1'>
          <Form user={user} />
        </div>
        <div className='child2'>
          <Table items={items} user={user}/>
        </div>
      </div>
      </>
      }
    </div>
  )
}

export default Profile;

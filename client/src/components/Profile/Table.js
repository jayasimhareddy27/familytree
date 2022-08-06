import React from 'react'
import { DelData } from '../../redux/actions/A_Form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.css'
const Table = ({items,user}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const delnode=(id_)=>{
    const xid={
      id:id_,
      user:user.result,
    }
    dispatch(DelData(xid,navigate));
  }
  
  return (
    <div className='table'> 

    <table id="customers" style={{ width: 1000 }}>
    <thead>
        <th>id</th>
        <th>parent</th>
        <th>title</th>
        <th>description</th>
        <th>image</th>
        <th>delete</th>
    </thead>
      {items.map((val,key)=>{
        return(
        <tr key={key}>
          <td>{val.id}</td>
          <td>{val.parent}</td>
          <td>{val.title}</td>
          <td>{val.description}</td>
          <td><img src={val.image} alt={val.title} style={{ width: 100 }}></img></td>
          <td><button onClick={()=>{delnode(val.id)}}>delete</button></td>
        </tr>
        )
      })
      }
  
  </table>

    </div>
  )
}

export default Table
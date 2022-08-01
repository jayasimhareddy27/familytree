import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { PostData } from '../../redux/actions/A_Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';
import './styles.css'
const Form = ({user}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setform] = useState({id:'',parent:'',title:'',description:'',image:''})
  function onFormFieldChange(e){setform({...form,[e.target.name]:e.target.value}) }
  const fetchpost=(e)=>{
    e.preventDefault();
    const data={
      form,
      email:user.result.email
    }
    dispatch(PostData(data,navigate));
  }
  return (
    <div >
    <form className='fromcontainer'>
    <h1>Fill  the Form</h1>
        id:<input name='id' type="text" value={form.id} onChange={onFormFieldChange}/><br></br><br></br>
        parent:<input name='parent' type="text" value={form.parent} onChange={onFormFieldChange}/><br></br><br></br>
        title<input name='title' type="text"  value={form.title} onChange={onFormFieldChange} /><br></br><br></br>
        description<input name='description' type="text" value={form.description} onChange={onFormFieldChange}/><br></br><br></br>
        image<FileBase
                  type="file"
                  mutliple={false}
                  onDone={({base64})=>setform({...form,image:base64})}
              /><br></br><br></br>
        <button type="submit" value="submit" onClick={fetchpost}>fetch</button><br></br><br></br>
    </form>   
    </div>
  )
}

export default Form
import React, { useState,useEffect } from 'react'
import { PostData } from '../../redux/actions/A_Form';
import { useDispatch,useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';
import './assets/styles.css'


const Form = ({user}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const [form, setform] = useState({id:'',parent:'',title:'',label:'a',description:'',image:''})
  function onFormFieldChange(e){setform({...form,[e.target.name]:e.target.value}) }
  const fetchpost=(e)=>{
    e.preventDefault();
    if(form.id==='' || form.description===''){
      alert("Please fill the form correctly");
      return
    }
    const data={ form, email:user.result.email}
    dispatch(PostData(data,navigate));
    setform({id:'',parent:'',title:'',label:'',description:'',image:''}) 
  }

  const data = useSelector((state) => state.R_Form)[0];
  useEffect(() => {
    setform({...data});
  }, [data])
  
  return (
    <div >
    <h1>Fill  the Form</h1>
    <form className='formcontainer'>
        id:<input name='id' type="text" value={form.id} onChange={onFormFieldChange} required/>     <br></br> 
        parent:<input name='parent' type="text" value={form.parent} onChange={onFormFieldChange} required/>  <br></br> 
        title:<input name='title' type="text" value={form.title} onChange={onFormFieldChange} required/>  <br></br>
        description<input name='description' type="text" value={form.description} onChange={onFormFieldChange} required />   <br></br>
        image<FileBase type="file" mutliple={false} onDone={({base64})=>setform({...form,image:base64})}  /><br></br>
        <button type="submit" value="submit" onClick={fetchpost}>fetch</button><br></br><br></br>
    </form>   
    </div>
  )
}

export default Form
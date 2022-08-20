import React, { useState } from 'react'
import { PostData } from '../../redux/actions/A_Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';
import './assets/styles.css'


const Form = ({user}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setform] = useState({id:'',parent:'',title:'mr',description:'',image:''})
  function onFormFieldChange(e){setform({...form,[e.target.name]:e.target.value}) }
  function handleChange(e) {
    var select = document.getElementById('title');
    var value = select.options[select.selectedIndex].text;
    setform({...form,title:e.target.value}) 
  }
  const fetchpost=(e)=>{
    e.preventDefault();
    if(form.id===''){
      alert("Please type correct id");
      return
    }
    if(form.parent===''){
      alert("Please type the parent id");
      return
    }
    if(form.description===''){
      alert("Please type the desciption");
      return
    }
    console.log(form);
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
        title
        <select name="title" id="title" onClick={handleChange}>
            <option value="mr" selected>mr</option>
            <option value="mrs">mrs</option>
        </select> <br></br>
        id:<input name='id' type="text" value={form.id} onChange={onFormFieldChange}/><br></br><br></br>
        parent:<input name='parent' type="text" value={form.parent} onChange={onFormFieldChange}/><br></br><br></br>
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
import React, { useEffect } from 'react'
import './Home.css'
import cat from './cat.jpg'
import tree from './family-tree.png'
import Nologin from '../Profile/Nologin'
const Home = () => {
  var data=JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    data=JSON.parse(localStorage.getItem('profile'));
    //console.log(data);
  }, [localStorage.getItem('profile')])

  return (
    <>
        <div className='grid-container'>
          <div className='items1' >
            <h1>Family Tree</h1>
            <p>We help make that possible with the FamilySearch Family Tree, the world's largest online family tree—home to information about more than 1.2 billion ancestors.</p>
            <p>The Family Tree offers users a free family tree template featuring multiple tree and fan chart views, timeline and mapping tools, record hints and research helps, and access to billions of online records.</p>
          </div>
          <div className='items2'>
            <img src={tree} alt="FamilyTree" style={{height:'350px'}}   />
          </div>
        </div>
        <Nologin/>
        <>
        <p>type here for more content..</p>

        </>
    </>
  )
}

export default Home
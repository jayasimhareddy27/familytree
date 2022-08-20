import React from 'react'
import '../Profile/assets/Nologin.css'
import step1 from '../Profile/assets/step1.svg'
import step2 from '../Profile/assets/step2.svg'
import step3 from '../Profile/assets/step3.svg'
const Nologin = () => {
  return (
    <div className='bdy'>
        <div className='center' >How to Start a Family Tree<p>Creating a family tree is free and easy.</p></div>
        <div className='grid-container1'>
            <div className='center1' >Step 1: Create a free account.<p>Not only will you be able to start your family tree, but creating an account gives you access to FamilySearch's online records and the Memories storage feature.</p></div>
            <img src={step1} alt="FamilyTree" style={{height:'250px'}}   />
        </div>
        <div className='grid-container1'>
            <img src={step2} alt="FamilyTree" style={{height:'250px'}}   />
            <div className='center1' >Step 2: Add what you know about your family.
<p>We recommend starting with the first four generations. Know that FamilySearch protects the privacy of living people—nobody else can see what you enter about yourself or other living family members.</p></div>
        </div>
        <div className='grid-container1'>
            <div className='center1' >Step 3: Connect to FamilySearch's vast database of information.
<p>Once you add a deceased relative to the tree, FamilySearch will try to connect you to any information it has about that person in its database. If it finds a match, FamilySearch can auto populate information, saving you a lot of time!
</p></div>
            <img src={step3} alt="FamilyTree" style={{height:'250px'}}   />
        </div>
        <div className='grid-container1'></div>
        <div className='grid-container1'></div>
    </div>
  )
}

export default Nologin
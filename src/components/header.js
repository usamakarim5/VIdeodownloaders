import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import downloadLogo from '../images/downloadLogo.png'


const Header = (props) => {
  const {setCurrentPage} = props

  const setPage =(page)=>{
    localStorage.setItem('current-page', page)
    setCurrentPage(page)
  }

  return (
    <>
    <div className='header_main'>
        <div className='header_inner'>
            <img className='logo_image' src = {downloadLogo} alt = 'pic'/>
            <Link className='header_link' onClick={()=>{setPage('Dashboard')}}>Home</Link>
            <Link className='header_link' onClick={()=>{setPage('About')}}>About</Link>
            <Link className='header_link' onClick={()=>{setPage('FAQs')}}>FAQs</Link>
            <Link className='header_link' >Privacy Policy</Link>
            <button className='h_learn_btn'>Learn more</button>
        </div>
    </div>
    </>
  )
}

export default Header
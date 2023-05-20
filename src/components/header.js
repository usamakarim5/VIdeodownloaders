import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import downloadLogo from '../images/downloadLogo.png'


const Header = (props) => {
  const {scrollToAbout, scrollToFAQs, scrollToHome} = props


  return (
    <>
    <div className='header_main'>
        <div className='header_inner'>
        <span className='vids_title'>Vidz Downloader</span>
            {/* <img className='logo_image' src = {downloadLogo} alt = 'pic'/> */}
            <Link className='header_link' onClick={()=>{scrollToHome()}}>Home</Link>
            <Link className='header_link' onClick={()=>{scrollToAbout()}}>About</Link>
            <Link className='header_link' onClick={()=>{scrollToFAQs()}}>FAQs</Link>
            <Link className='header_link' >Privacy Policy</Link>
            <button className='h_learn_btn'>Learn more</button>
        </div>
    </div>
    </>
  )
}

export default Header
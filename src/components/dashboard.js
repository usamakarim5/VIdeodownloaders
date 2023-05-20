import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Header from './header'
import tiktok from '../images/tiktok.png'
import youtube from '../images/youtube.jpg'
import facebook from '../images/facebook.png'
import bottom_heart from '../images/bottom_heart.png'
import bottom_rocket from '../images/bottom_rocket.png'
import bottom_secure from '../images/bottom_secure.png'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import FAQs from './faqs'
import About from './about'
import StepSection from './stepsSection'
import FeaturesSection from './featuresSection'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const items = [
    {
      src: tiktok,
      title: "Tiktok",
      altText: 'Slide 1',
      key: 1,
    },
    {
      src: youtube,
      title: "YouTube",
      altText: 'Slide 2',
      key: 2,
    },
    {
      src:facebook,
      title: "Facebook",
      altText: 'Slide 3',
      key: 3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const homeRef = useRef(null);
  const aboutRef =useRef(null);
  const faqsRef = useRef(null);


  const goToSlide = (slideIndex) => {
    if (animating) return;
    setActiveIndex(slideIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
    <div className='d-flex align-items-center justify-content-center'>
    <img src={item.src} alt={item.altText} />
    </div>
  
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

 const scrollToHome = ()=>{
  homeRef.current.scrollIntoView({ behavior: 'smooth' });
 }
 const scrollToAbout = ()=>{
  aboutRef.current.scrollIntoView({ behavior: 'smooth' });
 }
 const scrollToFAQs = ()=>{
  faqsRef.current.scrollIntoView({ behavior: 'smooth' });
 }

  return (
    <>
    <Header scrollToHome = {scrollToHome} scrollToAbout = {scrollToAbout} scrollToFAQs = {scrollToFAQs}/>
      <div className='dashboard_main' ref={homeRef}>
      <div className='download_section'>
    <div className='d_title'>
        <span>Download Videos By Pasting Any Link</span>
    </div>
    <div className='search_div'>
    <i className="fa-solid fa-link paste_icon"></i>
    <input className='search_input' placeholder='Paste link here'></input>
    <button className='search_btn'>Download</button>
    </div>
    <div className="custom-buttons">
        {items.map((item, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={activeIndex == index ? `Tiktok me-3` : `me-3 simple`}>
          {item.title}
          </button>
        ))}
      </div>
    <Carousel className='w-100' activeIndex={activeIndex} interval={false} keyboard={false} pause={false}>
      {slides}
    </Carousel>
    </div>
    </div>
    <div className='bottom_section'>
     <div className='bottom_card'>
      <img className='bottom_image' src = {bottom_heart} alt = 'pic'></img>
      <div className='bottom_text'>
      <div style={{color:'black'}}><b>Super Easy</b></div>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      </div>
     </div>
     <div className='bottom_card'>
      <img className='bottom_image' src = {bottom_rocket} alt = 'pic'></img>
      <div className='bottom_text'>
      <div style={{color:'black'}}><b>Super Fast</b></div>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      </div>
     </div>
     <div className='bottom_card'>
      <img className='bottom_image' src = {bottom_secure} alt = 'pic'></img>
      <div className='bottom_text'>
      <div style={{color:'black'}}><b>Secure</b></div>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      </div>
     </div>
    </div>
    <StepSection/>
    <FeaturesSection/>
    <FAQs faqsRef= {faqsRef}/>
    <About aboutRef = {aboutRef}/>
    <div className='footer'>
      <div className='hr'></div>
      <div className='footer_main'>
        <div className='footer_logo'>
          Vidz Downloader
        </div>
        <div className='footer_links'>
          <Link className='footer_link'>
            Contact Us
          </Link>
          <Link className='footer_link'>
            Privacy Policy
          </Link>
          <Link className='footer_link'>
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className='copy_right'>
        All Rights Reserved
      </div>
    </div>
    </>
  )
}

export default Dashboard
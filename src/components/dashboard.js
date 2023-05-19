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
  const [currentPage, setCurrentPage] = useState('Dashboard')

  useEffect(()=>{
   let page =  localStorage.getItem('current-page')
   if(page){
    setCurrentPage(page)
   }
   else{
    setCurrentPage('Dashboard')
   }
  },[])

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
      <img src={item.src} alt={item.altText} />
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));



  return (
    <>
    
    <Header setCurrentPage= {setCurrentPage}/>
    {
      currentPage == 'Dashboard' && 
      <>
      <div className='dashboard_main'>
      <div className='download_section'>
    <div className='d_title'>
        <span>Download Videos By Link</span>
    </div>
    <div className='search_div'>
    <i className="fa-solid fa-link paste_icon"></i>
    <input className='search_input' placeholder='Paste link here'></input>
    <button className='search_btn'>Download</button>
    </div>
    <div className="custom-buttons">
        {items.map((item, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`Tiktok me-3`}>
          {item.title}
          </button>
        ))}
      </div>
    <Carousel activeIndex={activeIndex} interval={false} keyboard={false} pause={false}>
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
   
            
    </>
    }
   {
    currentPage == 'About' && 
    <About/>
   }
   {
    currentPage == 'FAQs' && 
    <FAQs/>
   }
    


    </>
  )
}

export default Dashboard
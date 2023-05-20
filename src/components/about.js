import React from "react";
import '../App.css'
import about from '../images/about.jpg'

const About = (props) => {
  const{aboutRef} = props
  return (
    <>
      <div className="freq_main" ref = {aboutRef}>
        <div className="about_main">
          <div className="q_right">
            <h4 className="py-4">About Us</h4>
            <p className="w-100 about_text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div className="q_left">
            <img src={about} alt="pic" className="q_left_image w-75"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

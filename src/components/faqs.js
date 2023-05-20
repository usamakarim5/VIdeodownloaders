import React, { useState } from 'react'
import '../App.css'
import faqs from '../images/faqs.png'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';


const FAQs = (props) => {
   const {faqsRef} = props
    const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
    <div className='freq_main' ref = {faqsRef}>
        <h4 className='mb-5'>Frequently Asked Questions (FAQs)</h4>
        <div className='questions_main'>
         <div className='q_left'>
            <img src = {faqs} alt = 'pic' className='q_left_image'></img>
         </div>
         <div className='q_right'>
            <h6 className='py-4'>Frquently Asked Questions</h6>
            <div className='w-100'>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1"><b> You can modify any of this with custom CSS or overriding our default</b></AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
           ou can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2"><b> You can modify any of this with custom CSS or overriding our default</b></AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
           ou can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3"><b> You can modify any of this with custom CSS or overriding our default</b></AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
           ou can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4"><b> You can modify any of this with custom CSS or overriding our default</b></AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>This is the third item&#39;s accordion body.</strong>
           ou can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5"><b> You can modify any of this with custom CSS or overriding our default</b></AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>This is the third item&#39;s accordion body.</strong>
           ou can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6"><b> You can modify any of this with custom CSS or overriding our default</b></AccordionHeader>
          <AccordionBody accordionId="6">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default FAQs
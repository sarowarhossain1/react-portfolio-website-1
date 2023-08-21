import React from 'react'
import './experience.css'



const Experience = () => {
  return (
    <section id='mySkill' className='skills'>
     <h2>MY SKILL</h2>
     <div className='container skill-main'>
      <div className='skill-left'>
        <h3>Frontend Development</h3>
        <div className=' skill-bar'>
          <div className='info'>
            <p>HTML</p>
             <p>90%</p>
          </div>
          <div className='bar'>
            <span className='html'></span>
          </div>
        </div>
      <div className=' skill-bar'>
          <div className='info'>
            <p>CSS</p>
             <p>80%</p>
          </div>
          <div className='bar'>
            <span className='css'></span>
          </div>
        </div>
        <div className='skill-bar'>
          <div className='info'>
            <p>JavaScript</p>
             <p>75%</p>
          </div>
          <div className='bar'>
            <span className='javaScript'></span>
          </div>
        </div>
        <div className=' skill-bar'>
          <div className='info'>
            <p>React.js</p>
             <p>85%</p>
          </div>
          <div className='bar'>
            <span className='react'></span>
          </div>
        </div>
        <div className=' skill-bar'>
          <div className='info'>
            <p>Tailwind</p>
             <p>80%</p>
          </div>
          <div className='bar'>
            <span className='tailwind'></span>
          </div>
        </div>
        <div className='skill-bar'>
          <div className='info'>
            <p>Bootstrap</p>
             <p>85%</p>
          </div>
          <div className='bar'>
            <span className='bootstrap'></span>
          </div>
        </div>
        </div>
      <div className='skill-left'>
      <h3>Backend Development</h3>
      <div className=' skill-bar'>
          <div className='info'>
            <p>Node.js</p>
             <p>75%</p>
          </div>
          <div className='bar'>
            <span className='node'></span>
          </div>
        </div>
      <div className=' skill-bar'>
          <div className='info'>
            <p>Express</p>
             <p>70%</p>
          </div>
          <div className='bar'>
            <span className='express'></span>
          </div>
        </div>
      <div className=' skill-bar'>
          <div className='info'>
            <p>MongoDB</p>
             <p>60%</p>
          </div>
          <div className='bar'>
            <span className='mongoDB'></span>
          </div>
        </div>
      <div className=' skill-bar'>
          <div className='info'>
            <p>Firebase</p>
             <p>35%</p>
          </div>
          <div className='bar'>
            <span className='firebase'></span>
          </div>
        </div>
        </div>
        </div>
   </section>
  )
}

export default Experience
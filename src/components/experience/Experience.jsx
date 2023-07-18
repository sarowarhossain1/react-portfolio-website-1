import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='mySkill'>
      <h2>MY SKILL</h2>
   <div className="skill_container">
    <div className="skill_frontend">
      <h3>Frontend Development</h3>
       <div className="skill_content">
        <article className='skill_details'>
           <h4>HTML</h4>
        </article>
        <article className='skill_details'>
           <h4>CSS</h4>
        </article>
        <article className='skill_details'>
           <h4>JavaScript</h4>
        </article>
        <article className='skill_details'>
           <h4>React.js</h4>
        </article>
        <article className='skill_details'>
           <h4>Tailwind</h4>
        </article>
        <article className='skill_details'>
           <h4>Bootstrap</h4>
        </article>
       </div>
    </div>
    <div className="skill_backend">
    <h3>Backend Development</h3>
       <div className="skill_content">
        <article className='skill_details'>
           <h4>Node.js</h4>
        </article>
        <article className='skill_details'>
           <h4>Express</h4>
        </article>
        <article className='skill_details'>
           <h4>MongoDB</h4>
        </article>
        <article className='skill_details'>
           <h4>JWT</h4>
        </article>
        <article className='skill_details'>
           <h4>Firebase</h4>
        </article>
       </div>
    </div>
    </div>
    </section>
  )
}

export default Experience
import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section id='myQualification'>
      <h2>MY QUALIFICATION</h2>
   <div className="container qualification_container">
    <div className="qualification_education">
      <h3>Education</h3>
       <div className="qualification_content">
        <article className='qualification_details'>
           <h4>BSC Engineering in "CSE"</h4>
            <p className='qualification_description'>Rajshahi Science & Technology University | 2022</p>
        </article>
        <article className='qualification_details'>
           <h4>Diploma Engineering in "Computer Technology"</h4>
            <p className='qualification_description'>Daffodil Polytechnic Institute | 2016-2020</p>
        </article>
        <article className='qualification_details'>
           <h4>Secondary School Certificate</h4>
            <p className='qualification_description'>Rajshahi Adarsha High School | 2012-2014</p>
        </article>
       </div>
    </div>
    <div className="qualification_courses">
    <h3>Courses</h3>
       <div className="qualification_content">
        <article className='qualification_details'>
        <h4>Complete Web Development</h4>
        <p className='qualification_description'>Programming Hero | 2023</p>
        </article>
        <article className='qualification_details'>
        <h4>Web Design</h4>
        <p className='qualification_description'>raj IT | 2022</p>
        </article>
       </div>
    </div>
    </div>
    </section>
  )
}

export default Qualification
import React from 'react'
import './about.css'
import MY from '../../assets/MY.jpg'

const About = () => {
  return (
   <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>
    <div className=" about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={MY}  alt="About Image" />
        </div>
      </div>
      <div className="about_content">
       <div className="about_cards">
        <article className='about_card'>
         <p className='about_content'>I'm Md Sarowar Hossain Nayem, and i Live in Rajshahi.I am studied Computer Science and Engineering(CSE) at the Rajshahi Science & Technology University.
           <br />
           In the last two years, I have worked hard to get better at different things. I have given a lot of importance to managing my time well, and it has really helped me improve my skills. Specifically, I have focused on getting better at React, MongoDB, and JavaScript.
           
                </p>
        </article>
       </div>

       <a href="#contact" className='btn btn-primary'> Hire Me</a>
      </div>
    </div>

   </section>
  )
}

export default About
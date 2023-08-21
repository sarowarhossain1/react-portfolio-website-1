import React from 'react'
import LAPTOP from '../../assets/laptop.png'

const Services = () => {
  return (
    <section id='services'>
       <h2>MY SERVICE</h2>
       <div className='container services_container'>
         <article className='service'>
          <div className='service_head'>
            <div className='service_img'>
            <img src={LAPTOP} alt="" />
            </div>
            <h3>Front End Development</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque facere labore est facilis error quisquam nihil tempora, harum tempore fugiat, quas odit dolore, expedita aliquam cupiditate eligendi sint provident autem!
            </p>
          </div>
         </article>
       </div>
    </section>
  )
}

export default Services
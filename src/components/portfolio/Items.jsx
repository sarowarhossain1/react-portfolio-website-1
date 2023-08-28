import React from 'react'
import {FaArrowRight} from 'react-icons/fa'


const Items = ({projectItems}) => {
  return (
    <>
    {projectItems.map((projectItem)=> {
        const {id,img, title,category, description}= projectItem;
        return(
            <div className="portfolio_items card card-two" key={id}>
                <div className="portfolio_img-wrapper">
                    <img src={img} alt="" className="portfolio_img" />
                </div>
                <span className='portfolio_category text-cs'>{category}</span>
                <h3 className="portfolio_title">{title}</h3>
                <p className="portfolio_description">{description}</p>
                <a href="https://summer-camp-c1d6c.web.app/ " target='_blank' className="link">
                  see pricing
                  <FaArrowRight className='link_icon'></FaArrowRight>
                </a>

               
            </div>
        )
    } )}
    </>
  )
}

export default Items
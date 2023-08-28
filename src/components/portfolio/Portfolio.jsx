import React, { useState } from 'react'
import './portfolio.css'
import List from './List'
import Items from './Items'
import { projects } from '../../Data'

const allNavList =[ 'all', 
 ...new Set(projects.map((project) => project.category))];
console.log(allNavList);
const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects)
  const [navList, setCategories] = useState(allNavList)

  const filterItems =(category) =>{
    const newProjectItems = projects.filter((item) => item.category === category);

    setMenuItems(newProjectItems);
  }
 
  return (
    <section className='portfolio section' id='work'>
      <h2 className="section_title">MY PORTFOLIO</h2>
      
      <List list={navList} filterItems={filterItems}/>

      <div className="portfolio_container container grid">
        <Items projectItems={projectItems} />
      </div>
    </section>
  )
}

export default Portfolio
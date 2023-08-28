import React, { useState } from 'react'

const List = ({list, filterItems}) => {
  const [active, setActive,id] = useState(0);
  return (
    <div className='portfolio_list'>{list.map((category) => {
      return(
        <div className={`${active === id ? 'active-work' : 
      ''} portfolio_list-item text-cs`} key={id} onClick={() =>{setActive(id)
       filterItems(category);
      }}>{category}</div>
      )
    })}</div>
  )
}

export default List
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  return (
      <div>
        
        <div className='navbar'>
         <ul>
             <h3 ><li><NavLink className='nbar' to ="/">Home</NavLink></li></h3>
             <h3><li><NavLink className='nbar' to="/bollywood" >Bollywood</NavLink></li></h3>
             <h3><li><NavLink className='nbar' to="/technology">Technology</NavLink></li></h3>
             <h3><li><NavLink className='nbar' to="/hollywood">Hollywood</NavLink></li></h3>
             <h3><li><NavLink className='nbar' to="/fitness">Fitness</NavLink></li></h3>
             <h3><li><NavLink className='nbar' to="/food">Food</NavLink></li></h3>
         </ul>
     </div>
    
    </div>
  )
}

export default Nav
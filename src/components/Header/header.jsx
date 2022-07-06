import React from 'react'
import './Header.css';

const Header = ({setCategory}) => {
  return (
   
    {/* <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      News
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a onClick={()=> setCategory('all')}>Home</a>
    <a onClick={()=> setCategory('national')}>National</a>
    <a onClick={()=> setCategory('buisness')}>Buisness</a>
    <a onClick={()=> setCategory('sports')}>Sports</a>
    <a onClick={()=> setCategory('world')}>World</a>
    <a onClick={()=> setCategory('politics')}>Politics</a>
    <a onClick={()=> setCategory('technology')}>Technology</a>
    <a onClick={()=> setCategory('startup')}>Startup</a>
    <a onClick={()=> setCategory('entertainment')}>Entertainment</a>
    <a onClick={()=> setCategory('miscellaneous')}>Miscellaneous</a>
  </div>
</div> */},
<nav className='sticky'>
  <div className="navicon">
    <div></div>
  </div>

  <a onClick={()=> setCategory('all')}>Home</a>
  <a onClick={()=> setCategory('national')}>National</a>
    <a onClick={()=> setCategory('buisness')}>Buisness</a>
    <a onClick={()=> setCategory('sports')}>Sports</a>
    <a onClick={()=> setCategory('world')}>World</a>
    <a onClick={()=> setCategory('politics')}>Politics</a>
    <a onClick={()=> setCategory('technology')}>Technology</a>
    <a onClick={()=> setCategory('startup')}>Startup</a>
    <a onClick={()=> setCategory('entertainment')}>Entertainment</a>
    <a onClick={()=> setCategory('miscellaneous')}>Miscellaneous</a>

</nav>

  )
}

export default Header
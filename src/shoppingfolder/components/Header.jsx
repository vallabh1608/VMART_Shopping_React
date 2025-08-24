import React from 'react'

const Header = () => {
  return (
    <div className='header-section'>
      <div className ='left'>
        <div className='title'>
          <h2>VMart Shopping</h2>
        </div>
      </div>
      <div className ='center'>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Beauty</li>
          <li>Children</li>
        </ul>
      </div>
      <div className='search'>
          <input type='text' placeholder='search here.....'/>
        </div>
      <div className ='right'>
        <div className="cart">
                Cart
        </div>
        <div className="signin">
                Signin / Signup
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Header

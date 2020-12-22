import React from 'react'

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <a href='/'>Case Studies</a>
              </li>
              <li>
                <a href='/'>Approach</a>
              </li>
              <li>
                <a href='/'>Services</a>
              </li>
              <li>
                <a href='/'>About Us</a>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <a href='/'>Get in touch with us</a>
                </li>
                <li>
                  <a href='/'>Get a free audit</a>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarters</li>
                <li>Chapel Jour Florida 44</li>
                <li>1200 Miami</li>
                <li>United States</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+32 (2) 213 32 12</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Art enable us</span>
            </div>
            <div className='line'>
              <span>to find ourselves.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              For learn more... <RightArrow />{' '}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Banner from './components/Banner'
import Cases from './components/Cases'
import Header from './components/Header'
import IntroOverlay from './components/IntroOverlay'
import './styles/App.scss'
import Navigation from './components/Navigation'

const tl = gsap.timeline()
const HomeAnimation = (completeAnimation) => {
  tl.from('.line span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'circ.inOut',
      stagger: 0.4,
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'circ.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    // .to('.intro-overlay', 0, {
    //   css: { display: 'none' },
    // }) >> ı use another way to remove overlay
    .from('.case-image img', 1.6, {
      scale: 1.4,
      ease: 'circ.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    })
}

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnimation = () => {
    setAnimationComplete(true)
  }
  useEffect(() => {
    //prevent flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } }, { autoAlpha: 0 })

    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    HomeAnimation(completeAnimation)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return (
    <>
      <div className='App'>
        {animationComplete === false ? <IntroOverlay /> : ''}
        <Header dimensions={dimensions} />
        <Banner />
        <Cases />
      </div>

      <Navigation />
    </>
  )
}

export default App

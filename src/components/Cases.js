import React from 'react'
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg'

const caseStudies = [
  {
    id: 1,
    subtitle: 'Aesthetic',
    title: 'The principles of true art is not to portray, but to evoke',
    img: 'one',
  },
  {
    id: 2,
    subtitle: 'Nuance',
    title: 'Creativity takes courage',
    img: 'two',
  },
  {
    id: 3,
    subtitle: 'Splendor',
    title: 'A picture is a poem without words',
    img: 'three',
  },
]

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-nav'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map((caseStudy) => (
            <div className='case' key={caseStudy.id}>
              <div className='case-details'>
                <span>{caseStudy.subtitle}</span>
                <h2>{caseStudy.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseStudy.img}.jpg`).default}
                  alt={caseStudy.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases

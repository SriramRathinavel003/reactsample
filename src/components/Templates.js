import React from 'react'
import Navigation from './Navigation'
import '../styles/template.css'
import Tempcomp from './Tempcomp'
import Lowercomp from './Lowercomp'

function Templates() {
  return (
    <div>
      <Navigation/>
      <div className='lool'>
        <Tempcomp/>
      </div>
      <Lowercomp/>
    </div>
  )
}

export default Templates
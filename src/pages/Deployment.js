import React from 'react'
import Commands from './Commands'
import Deploy from './Deploy'
import Install from './Install'

const Deployment = () => {
  return (
    <div>
        <h2 className='noSelect' style={{ margin: 30, textAlign: "center" }}>
            Deployment{" "}
        </h2>
        <div className='all'>
            <Commands/>
            <Install/>
            <Deploy/>/
        </div>
    </div>
  )
}

export default Deployment
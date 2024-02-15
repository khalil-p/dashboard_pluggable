import React from 'react'
import TitleBullet from '../../shared/TitleBullet'

function Heading({heading}) {
  return (
    <div className='flex items-center gap-2'><TitleBullet/><h2 className="font-semibold">{heading}</h2></div>
  )
}

export default Heading
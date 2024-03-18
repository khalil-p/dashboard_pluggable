import React from 'react'

// function Path({currentPage}) {
function Path({currentPage,path}) {
  return (
    <div className='flex gap-2 justify-between px-2 w-max'>
        <span className='text-sm hover:text-[#5879e6] cursor-pointer'>Dashboard</span>
        <span className='text-sm'>/</span>
        <span className='text-sm font-semibold'>{path}</span>
    </div>
  )
}

export default Path
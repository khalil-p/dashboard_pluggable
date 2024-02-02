import React from 'react'

function Path({currentPage}) {
  return (
    <div className='flex gap-2 justify-between px-2 w-[calc(100vw-1100px)]'>
        <span className='text-sm hover:text-[#5879e6] cursor-pointer'>Dashboard</span>
        <span className='text-sm'>/</span>
        {/* <span>{currentPage}</span> */}
        <span className='text-sm font-semibold'>Policy Proposal Status</span>
    </div>
  )
}

export default Path
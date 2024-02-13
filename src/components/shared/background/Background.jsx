import React from 'react'

function Background({children}) {
  return (
    <div
    className="bg-white p-4 border border-extraLightGray
    text-subHeading rounded-md flex flex-col justify-between gap-2 items-start"
  >
    {children}
    </div>
  )
}

export default Background
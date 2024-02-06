import React from 'react'
import { MdOutlineZoomOutMap } from "react-icons/md";
function ZoomButton({onclick}) {
  return (
    <button className="cursor-pointer p-2 rounded-xl hover:bg-slate-100 border border-gray text-[#5879e6]" onClick={onclick}><MdOutlineZoomOutMap/></button>
  )
}

export default ZoomButton
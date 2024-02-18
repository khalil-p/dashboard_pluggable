// import React, { useContext, useState } from 'react'
// import TableModal from './TableModal'
// import MainTable from './MainTable'
// import ZoomButton from '../../shared/buttons/ZoomButton'
// import { zoomContext } from "../../../lib/contexts/commonContexts";
// function Table() {
//   const {isZoomed,setIsZoomed} = useContext(zoomContext)
//     // const handleCloseZoom = () => {
//     //   setIsZoomed(false);
//     // };

//     const handleSetIsZoomed = () => {
//         if (isZoomed === false) {
//             setIsZoomed(true)
//             console.log(isZoomed)
//         } else {
//             setIsZoomed(false)
//         }
//         console.log(isZoomed)
//     }
//     return (
//         <>
//             {/* <ZoomButton onclick={() => setIsZoomed(true)}/> */}
//             {/* <ZoomButton onclick={handleSetIsZoomed} /> */}
//             {isZoomed && <button>close</button>}
//             {/* <button  onClick={() => setIsZoomed(true)}>click me</button> */}
//             {isZoomed && (
//                 // <TableModal onClose={handleCloseZoom}>
//                 <TableModal>
//                     {/* <MainTable handleSetIsZoomed={handleSetIsZoomed}/> */}
//                     <MainTable />
//                 </TableModal>
//             )}
//         </>
//     )
// }

// export default Table

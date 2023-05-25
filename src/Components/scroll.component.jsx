/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Scroll({children}) {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
    {children}
    
    </div>
  )
}

export default Scroll
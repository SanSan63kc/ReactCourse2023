import React, { useState } from 'react'
import "./CardButton.css"

function CardButton({ children, className, ...props }) {

  let cl = "card-button" + (className ? " "  + className : "")

  return (
    <button {...props} className={cl}>
      {children}
    </button>
  )
}

export default CardButton
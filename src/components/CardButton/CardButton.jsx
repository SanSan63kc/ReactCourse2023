import React, { useState } from 'react'
import "./CardButton.css"

function CardButton({ children, className }) {

  let cl = "card-button" + (className ? " "  + className : "")

  return (
    <button className={cl}>
      {children}
    </button>
  )
}

export default CardButton
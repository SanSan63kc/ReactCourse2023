import React, { useState } from 'react'
import "./Button.css"

let Button =({children, onClick}) => {
  return (
    <button className="button accent" onClick={onClick}>{children} </button>
  )
}

export default Button
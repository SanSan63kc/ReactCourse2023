import React, { useState } from 'react'
import "./Button.css"

function Button() {

  //let text = "Сохранить"
  let [text, setText] = useState("Сохранить")

  let clicked = () => {
    setText("Закрыть")
    console.log("Привет")
  }

  return (
      <button onClick={clicked} className="button accent">{text}</button>
  )
}

export default Button
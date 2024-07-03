import React, { useState } from 'react'
import "./JournalItem.css"

function JournalItem() {

  let title = "Подготовка к обновлению курсов"
  let date = new Date()
  let text = "Текст первой заметки"

  return (
      <div className="journal-item">
        <h2 className="journal-item__header">{title}</h2>
        <div className="journal-item__body">
          <div className="journal-item__date">{date.toString()}</div>
          <div className="journal-item__text">{text}</div>
        </div>
      </div>
  )
}

export default JournalItem
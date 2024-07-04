import React, { useState } from 'react'
import "./JournalAddButton.css"
import CardButton from '../CardButton/CardButton'

function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      Новая заметка
    </CardButton>
  )
}

export default JournalAddButton
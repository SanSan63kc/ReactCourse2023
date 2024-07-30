import React, { useState } from 'react'
import "./JournalAddButton.css"
import CardButton from '../CardButton/CardButton'

function JournalAddButton({clearForm}) {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      Новое воспоминание
      <div className='plus_logo'>
        <img  src="/plus.svg" alt="" />
      </div>
    </CardButton>
  )
}

export default JournalAddButton
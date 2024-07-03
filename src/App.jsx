import React, { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import JournalItem from './components/JournalItem/JournalItem'

function App() {
  return (
    <>
      <h1>Заголовок</h1>
      <p>Контент</p>
      <Button/>
      <JournalItem/>
    </>
  )
}

export default App

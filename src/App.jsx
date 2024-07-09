import React, { useState } from 'react'
import './App.css'
import JournalItem from './components/JournalItem/JournalItem'
import CardButton from './components/CardButton/CardButton'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'

let INITIAL_DATA = [
  /* {
    id: 1,
    title: "Подготовка к обновлению курсов",
    text: "Текст первой заметки",
    date: new Date(),
  },
  {
    id: 2,
    title: "Пробежать ТТТ",
    text: "В это воскресенье...",
    date: new Date(),
  } */
]

function App() {

  let [items, setItems] = useState(INITIAL_DATA)

  let addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: Math.max(...oldItems.map(item => item.id)) + 1
    }])
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton></JournalAddButton>
        <JournalList items={items}/>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App

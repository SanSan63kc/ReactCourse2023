import React, { useState } from 'react'
import './App.css'
import JournalItem from './components/JournalItem/JournalItem'
import CardButton from './components/CardButton/CardButton'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'

function App() {

  let data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Текст первой заметки",
      date: new Date(),
    },
    {
      title: "Пробежать ТТТ",
      text: "В это воскресенье...",
      date: new Date(),
    }
  ]

  let inputChange = (event) => {
    console.log(event)
    console.log(event.target.value)
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton></JournalAddButton>
        <JournalList>
          <CardButton>
            <JournalItem title={data[0].title} text={data[0].text} date={data[0].date} />
          </CardButton>
          <CardButton>
            <JournalItem title={data[1].title} text={data[1].text} date={data[1].date} />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <input type="text" onChange={inputChange} />
      </Body>

    </div>
  )
}

export default App

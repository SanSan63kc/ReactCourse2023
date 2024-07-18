import React, { useState, useEffect } from 'react'
import './App.css'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'


function App() {

  let [items, setItems] = useState(/* INITIAL_DATA */[])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"))

    if (data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })))
    }
  }, [])

  useEffect(()=>{
    if (items.length){
      localStorage.setItem("data", JSON.stringify(items))
    }
  }, [items])

  let addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      post: item.post,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(item => item.id)) + 1 : 1
    }])
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton></JournalAddButton>
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App

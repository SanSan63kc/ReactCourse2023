import React, { useState } from 'react'
import './App.css'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import { useLocalStorage } from './hooks/use-localstorage.hook'
import { UserContextProvider } from './context/user.context'

function mapItems(items) {
  if (!items) {
    return []
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }))
}


function App() {

  let [items, setItems] = useLocalStorage("data")


  let addItem = (item) => {
    setItems([...mapItems(items), {
     ...item,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
    }])
  }

  return (
    <>
      <UserContextProvider>
        <div className='app'>
          <LeftPanel>
            <Header />
            <JournalAddButton></JournalAddButton>
            <JournalList items={mapItems(items)} />
          </LeftPanel>
          <Body>
            <JournalForm onSubmit={addItem} />
          </Body>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App

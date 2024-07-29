import React, { useContext, useId, useMemo, useState } from 'react'
import "./JournalList.css"
import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import { UserContext } from '../../context/user.context'

function JournalList({ items, setItem }) {

  let { userId } = useContext(UserContext)

  let sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  }

  let filteredItems = useMemo(() => items
    .filter(el => el.userId === userId)
    .sort(sortItems), [items, userId])

  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>
  }

  return <>
    {filteredItems
      .map(el => (
        <CardButton key={el.id} onClick={() => setItem(el)}>
          <JournalItem
            title={el.title}
            post={el.post}
            date={el.date} />
        </CardButton>
      ))}
  </>
}

export default JournalList
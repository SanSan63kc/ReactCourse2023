import React, { useState } from 'react'
import "./JournalForm.css"
import Button from '../Button/Button'

function JournalForm({ onSubmit }) {

    let addJournalItem = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let formProps = Object.fromEntries(formData)
        onSubmit(formProps)
    }

    return (
        <form className='journal-form' onSubmit={addJournalItem}>
            <input type="text" name="title" />
            <input type="date" name="date"></input>
            <input type="text" name="tag"  />
            <textarea name="text" id=""></textarea>
            <Button text={"Сохранить"} />
        </form>
    )
}

export default JournalForm
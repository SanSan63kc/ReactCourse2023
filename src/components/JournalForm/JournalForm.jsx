import React, { useState } from 'react'
import "./JournalForm.css"
import Button from '../Button/Button'

function JournalForm({ children }) {

    let [inputData, setInputData] = useState("")

    let inputChange = (event) => {
        setInputData(event.target.value)
    }

    let addJournalItem = (e)=>{
        e.preventDefault()
        let formData = new FormData(e.target)
        let formProps = Object.fromEntries(formData)
        
        console.log(formProps)
    }

    return (
            <form className='journal-form' onSubmit={addJournalItem}>
                <input type="text" name="title" />
                <input type="date" name="date"></input>
                <input type="text" name="tag" value={inputData} onChange={inputChange} />
                <textarea name="post" id=""></textarea>
                <Button text={"Сохранить"} onClick={()=>{console.log("")}}/>
            </form>
    )
}

export default JournalForm
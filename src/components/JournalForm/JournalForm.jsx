import React, { useState } from 'react'
import "./JournalForm.css"
import Button from '../Button/Button'

function JournalForm({ onSubmit }) {

    let [formValidState,setFormValidState] = useState({
        title: true,
        post: true,
        date: true
    })

    let addJournalItem = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let formProps = Object.fromEntries(formData)
        let isFormValid = true

        if (!formProps.title?.trim().length){
            setFormValidState(state=>({...state, title:false}))
            isFormValid = false
        } else {
            setFormValidState(state=>({...state, title:true}))
        }

        if (!formProps.post?.trim().length){
            setFormValidState(state=>({...state, post:false}))
            isFormValid = false
        } else {
            setFormValidState(state=>({...state, post:true}))
        }

        if (!formProps.date){
            setFormValidState(state=>({...state, date:false}))
            isFormValid = false
        } else {
            setFormValidState(state=>({...state, date:true}))
        }

        if (!isFormValid){
            return 
        } else  onSubmit(formProps)

        /* onSubmit(formProps) */
    }

    return (
        <form className='journal-form' onSubmit={addJournalItem}>
            <input type="text" name="title" style={{border: formValidState.title ? undefined : "1px solid red"}}/>
            <input type="date" name="date" style={{border: formValidState.date ? undefined : "1px solid red"}}></input>
            <input type="text" name="tag"  />
            <textarea name="post" id="" style={{border: formValidState.post ? undefined : "1px solid red"}}></textarea>
            <Button text={"Сохранить"} />
        </form>
    )
}

export default JournalForm
import React, { useEffect, useState } from 'react'
import styles from "./JournalForm.module.css"
import Button from '../Button/Button'
import cn from 'classnames'

let INITIAL_STATE = {
    title: true,
    post: true,
    date: true
}

function JournalForm({ onSubmit }) {

    let [formValidState, setFormValidState] = useState(INITIAL_STATE)

    useEffect(() => {
        let timerId
        if (!formValidState.date || !formValidState.post || !formValidState.title) {
            timerId = setTimeout(() => {
                setFormValidState(INITIAL_STATE)
            }, 2000)
        }
        return ()=>{
            clearTimeout(timerId)
        }
    }, [formValidState])

    let addJournalItem = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let formProps = Object.fromEntries(formData)
        let isFormValid = true

        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({ ...state, title: false }))
            isFormValid = false
        } else {
            setFormValidState(state => ({ ...state, title: true }))
        }

        if (!formProps.post?.trim().length) {
            setFormValidState(state => ({ ...state, post: false }))
            isFormValid = false
        } else {
            setFormValidState(state => ({ ...state, post: true }))
        }

        if (!formProps.date) {
            setFormValidState(state => ({ ...state, date: false }))
            isFormValid = false
        } else {
            setFormValidState(state => ({ ...state, date: true }))
        }

        if (!isFormValid) {
            return
        } else onSubmit(formProps)

        /* onSubmit(formProps) */
    }

    return (
        <form className={styles["journal-form"]} onSubmit={addJournalItem}>
            <div>
                <input type="text" name="title" className={cn(styles["input-title"], {
                    [styles["invalid"]]: !formValidState.title
                })} />
            </div>

            <div className={styles["form-row"]}>
                <label htmlFor="date" className={styles["form-label"]}>
                    <img className={styles.logo} src="/calendar.svg" alt="Иконка календаря"></img>
                    <span>Дата</span>
                </label>
                <input type="date" name="date" id="date" className={cn(styles["input"], {
                    [styles["invalid"]]: !formValidState.date
                })} />
            </div>

            <div className={styles["form-row"]}>
                <label htmlFor="tag" className={styles["form-label"]}>
                    <img className={styles.logo} src="/folder.svg" alt="Иконка папки"></img>
                    <span>Метки</span>
                </label>
                <input type="text" id="tag" name="tag" className={styles["input"]} />
            </div>

            <textarea name="post" id="" className={cn(styles["input"], {
                [styles["invalid"]]: !formValidState.post
            })}/>

            <Button text={"Сохранить"} />
        </form>
    )
}

export default JournalForm
import React, { useEffect, useReducer } from 'react'
import styles from "./JournalForm.module.css"
import Button from '../Button/Button'
import cn from 'classnames'
import { formReducer, INITIAL_STATE } from './JournalForm.state'

function JournalForm({ onSubmit }) {

    let [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    let { isValid, isFormReadyToSubmit, values } = formState

    useEffect(() => {
        let timerId
        if (!isValid.date || !isValid.post || !isValid.title) {
            timerId = setTimeout(() => {
                dispatchForm({ type: "RESET_VALIDITY" })
            }, 2000)
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [isValid])

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values)
        }
    }, [isFormReadyToSubmit])

    let addJournalItem = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let formProps = Object.fromEntries(formData)
        dispatchForm({ type: "SUBMIT", payload: formProps })
    }

    return (
        <form className={styles["journal-form"]} onSubmit={addJournalItem}>
            <div>
                <input type="text" name="title" className={cn(styles["input-title"], {
                    [styles["invalid"]]: !isValid.title
                })} />
            </div>

            <div className={styles["form-row"]}>
                <label htmlFor="date" className={styles["form-label"]}>
                    <img className={styles.logo} src="/calendar.svg" alt="Иконка календаря"></img>
                    <span>Дата</span>
                </label>
                <input type="date" name="date" id="date" className={cn(styles["input"], {
                    [styles["invalid"]]: !isValid.date
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
                [styles["invalid"]]: !isValid.post
            })} />

            <Button text={"Сохранить"} />
        </form>
    )
}

export default JournalForm
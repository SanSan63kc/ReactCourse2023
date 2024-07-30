import React, { useContext, useEffect, useReducer, useRef } from 'react'
import styles from "./JournalForm.module.css"
import Button from '../Button/Button'
import cn from 'classnames'
import { formReducer, INITIAL_STATE } from './JournalForm.state'
import Input from '../Input/Input'
import { UserContext } from '../../context/user.context.jsx'

function JournalForm({ onSubmit, data, onDelete }) {

    let [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    let { isValid, isFormReadyToSubmit, values } = formState
    let titleRef = useRef()
    let dateRef = useRef()
    let postRef = useRef()
    let { userId } = useContext(UserContext)


    let focusError = (isValid) => {
        switch (true) {
            case !isValid.title: {
                titleRef.current.focus()
                break
            }
            case !isValid.date: {
                dateRef.current.focus()
                break
            }
            case !isValid.post: {
                postRef.current.focus()
                break
            }
        }
    }

    useEffect(() => {
        if (!data){
            dispatchForm({ type: "CLEAR" })
            dispatchForm({ type: "SET_VALUE", payload: { userId } })
        }
        dispatchForm({ type: "SET_VALUE", payload: { ...data } })
    }, [data])

    useEffect(() => {
        let timerId
        if (!isValid.date || !isValid.post || !isValid.title) {
            focusError(isValid)
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
            dispatchForm({ type: "CLEAR" })
            dispatchForm({ type: "SET_VALUE", payload: { userId } })
        }
    }, [isFormReadyToSubmit, values, onSubmit, userId])

    let onChange = (e) => {
        dispatchForm({ type: "SET_VALUE", payload: { [e.target.name]: e.target.value } })
    }

    useEffect(() => {
        dispatchForm({ type: "SET_VALUE", payload: { userId } })
    }, [userId])

    let addJournalItem = (e) => {
        e.preventDefault()
        dispatchForm({ type: "SUBMIT" })
    }

    let deleteJournalItem = () => {
        onDelete(data.id)
        dispatchForm({ type: "CLEAR" })
        dispatchForm({ type: "SET_VALUE", payload: { userId } })
    }

    return (
        <form className={styles["journal-form"]} onSubmit={addJournalItem}>
            {/* TITLE */}
            <div className={styles["form-row"]}>
                <Input
                    type="text"
                    onChange={onChange}
                    value={values.title}
                    name="title"
                    ref={titleRef}
                    isValid={isValid.title}
                    appearence="title"
                />
                {data?.id &&
                    <button
                        className={styles["delete"]}
                        type="button"
                        onClick={ deleteJournalItem}>
                        <img className={styles["delete-img"]} src="./archive.svg" />
                    </button>}
            </div>
            {/* DATE */}
            <div className={styles["form-row"]}>
                <label htmlFor="date" className={styles["form-label"]}>
                    <img className={styles.logo} src="/calendar.svg" alt="Иконка календаря"></img>
                    <span>Дата</span>
                </label>
                <Input
                    type="date"
                    onChange={onChange}
                    value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ""}
                    name="date"
                    id="date"
                    ref={dateRef}
                    isValid={isValid.date}
                />
            </div>
            {/* TAG */}
            <div className={styles["form-row"]}>
                <label htmlFor="tag" className={styles["form-label"]}>
                    <img className={styles.logo} src="/folder.svg" alt="Иконка папки"></img>
                    <span>Метки</span>
                </label>
                <Input
                    type="text"
                    id="tag"
                    onChange={onChange}
                    value={values.tag}
                    name="tag"

                />
            </div>
            {/* POST */}
            <textarea
                name="post"
                onChange={onChange}
                value={values.post}
                id=""
                ref={postRef}
                className={cn(styles["input"], {
                    [styles["invalid"]]: !isValid.post
                })}
            />

            <Button>Сохранить</Button>
        </form>


    )
}

export default JournalForm
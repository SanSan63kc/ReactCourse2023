import React from 'react'
import styles from "./SelectUser.module.css"

function SelectUser({ changeUser }) {

    return (
        <select name="user" id="user" onChange={changeUser}>
            <option value="1">Саня </option>
            <option value="2">Санёчек</option>
        </select>
    )
}

export default SelectUser
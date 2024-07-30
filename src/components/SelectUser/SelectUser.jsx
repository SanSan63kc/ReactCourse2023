import React, { useContext } from 'react'
import styles from "./SelectUser.module.css"
import { UserContext } from '../../context/user.context.jsx'

function SelectUser() {
    let { userId, setUserId } = useContext(UserContext)
    let changeUser=(e)=>{
        setUserId(Number(e.target.value))
    }
    return (
        <select className={styles["select"]} name="user" id="user" value={userId} onChange={changeUser}>
            <option value="1">Саня </option>
            <option value="2">Санёчек</option>
        </select>
    )
}

export default SelectUser
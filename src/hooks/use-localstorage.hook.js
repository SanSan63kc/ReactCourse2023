import { useState, useEffect } from "react"

export function useLocalStorage(key) {

    let [data, setData] = useState()

    useEffect(() => {
        let res = JSON.parse(localStorage.getItem(key))

        if (res) {
            setData(res)
        }
    }, [])

    let saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData))
        setData(newData)
    }

    return [data, saveData]
}
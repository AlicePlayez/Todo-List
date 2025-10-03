import { useEffect, useState } from "react"
import axios from "axios"

export const API = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // res=response
        // fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((res) => setUsers(res))
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data))
    })

    return <div>
        {
            users.map((user) =>
                <p>{user.name}</p>
            )
        }
    </div>
}
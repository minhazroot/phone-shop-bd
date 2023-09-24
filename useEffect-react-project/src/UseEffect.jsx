import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function UseEffect() {
    const [users, SetUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => SetUsers(data))

    }, [])
    return (

        <div>

            <h3>Users:{users.length}</h3>
            {
                users.map(friend => <Friend friend={friend}></Friend>)
            }

        </div>
    )
}
// 1.declare a state to hold the data
// 2.useEffect with coll back with dependency array
// 3.use fetch to lode data
// 4. set lode data  form state
// make a component for singal friend
//loop for users and coll Friend component and gib singel fried object as a Prameter 
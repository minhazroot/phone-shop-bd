import { useState } from "react"

export default function Counter() {
    const [Count, setCount] = useState(0)
    function HandelAdd() {
        const NewCount = Count + 1;
        setCount(NewCount)

    }
    function reduceHandel() {
        const NewReduce = Count - 1
        setCount(NewReduce)
    }
    return (
        <div style={{ border: '2px solid blue' }}>
            <h3>Counter:{Count}</h3>
            <button onClick={HandelAdd}>Add</button>
            <button onClick={reduceHandel}>Reduce</button>
        </div>
    )
}
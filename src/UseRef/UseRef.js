import React, { useEffect, useState, useRef } from "react";


const UseRef = ()=> {
    const [counter, setCounter] = useState(100)
    const timeId = useRef()
    const handleStart = () => {
        timeId.current = setInterval( () => {
            setCounter(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timeId.current)
    }

    return (
        <div style={{"marginTop":"20"}}>
            <h1>{counter}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default UseRef
import React, { useEffect } from "react";
import { useState } from "react";

const Interval = () => {
    const [countdown, setCountdown] = useState(3600)
    useEffect( () => {
        setInterval(() => {
        setCountdown(prevState => prevState - 1)
    }, 1000)
    return () => clearInterval()
}, [])
    
    return (
        <div style={{"padding":32 }}>
          <h1>{countdown}</h1>
        </div>
    )
}
export default Interval
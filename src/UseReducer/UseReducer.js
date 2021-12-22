import React, { useReducer } from "react";

const initialState = 0
const UP_ACTION = "up"
const DOWN_ACTION = "down"
const reducer = (state, action) => {
    console.log('reducer running...')
    switch(action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error("Invalid Action!")
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div style={{"padding":20}}>
            <h1>{count}</h1>
            <button 
            onClick={() => dispatch(DOWN_ACTION)}
            >
            Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>
            Up</button>
        </div>
    )
}
export default UseReducer
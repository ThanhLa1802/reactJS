import React from "react";
import { useState } from "react";

const gifts = [
    "Macbook pro 14",
    "iPhone 13 Pro Max",
    "Sony A6400"
]
const Gift = () => {
    const [gift, setGift] = useState()
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }
    return(
        <div>
            <h1>{gift || "Not have gift"}</h1>
            <button onClick={randomGift}>Lucky Draw</button> 
        </div>
    )
}


export default Gift;
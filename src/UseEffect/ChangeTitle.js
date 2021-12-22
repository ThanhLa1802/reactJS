import React, { useEffect } from "react";
import { useState } from "react";

const ChangeTitle = () => {
    const [title, setTitle] = useState("")
    useEffect(() => {
        document.title = title
    })
   
    return (
        <div style={{"padding":32 }}>
            <input 
            value={title}
            onChange={e => setTitle(e.target.value) }
            />
        </div>
    )
}
export default ChangeTitle
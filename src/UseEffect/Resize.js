import React, { useEffect, useState } from "react";

const Resize = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect (() => {
        const handleResize = ()=> {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })
    return (
        <h1>
            {width}
        </h1>
    )
}
export default Resize